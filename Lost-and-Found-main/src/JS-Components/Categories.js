// categories.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS-Components/categories.css"; // Import the CSS file
import Navbar from "./Navbar";

function Categories() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a GET request to your backend API endpoint
      const response = await axios.get("http://localhost:5000/api/get-data");

      // Set the retrieved data in the state
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
    
    <Navbar/>
    <div className="container">
      <h2>Displaying Lost and Found Items:</h2>
      {data.map((item) => (
        <div key={item._id} className="item">
          <p>Item's Name: {item.itemName}</p>
          <p>Last Seen At / Found At: {item.location}</p>
          <p>Your Name: {item.userName}</p>
          <p>Contact No.: {item.contactNumber}</p>

          <div className="img-container">
            <p>Photo:</p>
            <img
              src={`http://localhost:5000/uploads/messages/${item.photoFilename}`}
              alt="Item Photo"
            />
          </div>

          <hr />
        </div>
      ))}
    </div>
    </>
  );
}

export default Categories;
