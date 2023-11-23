const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/LokatDb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and models
const ItemSchema = new mongoose.Schema({
  itemName: String,
  location: String,
  userName: String,
  hostelRoom: String,
  contactNumber: String,
  photo: String, // Assuming you store the filename in the database
});

const Item = mongoose.model("Item", ItemSchema);

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/messages"); // Uploads folder in the root of your project
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Keep the original filename
  },
});

const upload = multer({ storage });

// Define route to handle form submissions
app.post("/api/submit-form", upload.single("photo"), async (req, res) => {
  try {
    console.log("Uploaded filename:", req.file.filename);
    const { itemName, location, userName, hostelRoom, contactNumber } = req.body;
    const photo = req.file ? req.file.filename : null;

    const newItem = new Item({ itemName, location, userName, hostelRoom, contactNumber, photo });
    await newItem.save();
    res.status(201).json({ message: "Form data submitted successfully" });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define route to fetch all items from the database
app.get("/api/get-data", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
