import React, { useState } from "react";
import "./CSS-Components/App.css";
import SignUp from "./JS-Components/SignUp";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import LNF from "./JS-Components/LNF";
import Categories from "./JS-Components/Categories";
import Home from "./JS-Components/Home";
import Banner from "./JS-Components/Banner";

function App() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    // Handle the submitted data as needed
    console.log("Form data submitted from App:", data);
    setSubmittedData(data);
  };

  return (
    <div>
    
      {/* lost or found form page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Main" element={<Main />} />
        <Route
          exact
          path="/Main/categories"
          element={<Categories submittedData={submittedData} />}
        />
          <Route
          exact
          path="/Main/lost/categories"
          element={<Categories submittedData={submittedData} />}
        />
          <Route
          exact
          path="/Main/found/categories"
          element={<Categories submittedData={submittedData} />}
        />
          <Route
          exact
          path="/Main/found/lost/categories"
          element={<Categories submittedData={submittedData} />}
        />
        {/* navigate to lost form */}
        <Route
          exact
          path="/Main/lost"
          element={<LNF l_or_f="l" onSubmit={handleFormSubmit} />}
        />
          <Route
          exact
          path="/Main/lost/found/lost"
          element={<LNF l_or_f="l" onSubmit={handleFormSubmit} />}
        />
          <Route
          exact
          path="/Main/found/lost"
          element={<LNF l_or_f="l" onSubmit={handleFormSubmit} />}
        />
        {/* navigate to found form */}
        <Route
          exact
          path="/Main/found"
          element={<LNF l_or_f="f" onSubmit={handleFormSubmit} />}
        />
         <Route
          exact
          path="/Main/lost/found"
          element={<LNF l_or_f="f" onSubmit={handleFormSubmit} />}
        />
          <Route
          exact
          path="/Main/found/lost/found"
          element={<LNF l_or_f="f" onSubmit={handleFormSubmit} />}
        />
        <Route
          exact
          path="signin"
          element={<SignUp todo="SIGN IN" />}
        />
        <Route
          exact
          path="signup"
          element={<SignUp todo="SIGN UP" />}
        />
       
      </Routes>
    </div>
  );
}

export default App;
