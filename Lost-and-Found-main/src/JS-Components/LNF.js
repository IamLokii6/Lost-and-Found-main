// LNF.js

import React, { useState } from "react";
import axios from "axios";
import "../CSS-Components/LNF.css";

import Categories from "./Categories";
import Navbar from "./Navbar";

function LNF(props) {
  const [formData, setFormData] = useState({
    itemName: "",
    location: "",
    userName: "",
    contactNumber: "",
    photo: null, // Added for photo upload
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use FormData to handle file uploads
      const formDataForUpload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataForUpload.append(key, value);
      });

      // Make a post request to your backend API endpoint
      await axios.post("http://localhost:5000/api/submit-form", formDataForUpload);

      // Log a success message or perform other actions after successful submission
      console.log("Form data submitted successfully");

      // Clear the form after submission
      setFormData({
        itemName: "",
        location: "",
        userName: "",
        contactNumber: "",
        photo: null,
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
    alert('DATA SUBMITTED')
  };

  return (
    <>
    <Navbar/>
    <div className="lnf" id="lnf">
    
      <form onSubmit={handleSubmit}>
        <div className="lnf-form-div">
          <label htmlFor="itemName">Item's Name</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={formData.itemName}
            onChange={handleInputChange}
          />
        </div>

        <div className="lnf-form-div">
          <label htmlFor="location">
            {props.l_or_f === "l" ? "Last Seen At" : "Found At"}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>

        <div className="lnf-form-div">
          <label htmlFor="userName">Your Name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
          />
        </div>

        <div className="lnf-form-div">
          <label htmlFor="contactNumber">Contact No.</label>
          <input
            type="number"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
        </div>

         <div className="lnf-form-div">
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default LNF;
