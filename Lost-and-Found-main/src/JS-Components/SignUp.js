import React from "react";
import { Link,useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "../CSS-Components/SignUp.css";


function SignUp(props) {

  const navigate = useNavigate();

  const handle=()=>{
  navigate("/Main")
  alert('SIGNED IN SUCCESSFULLY')
  }

  return (
    <div className="sign_in">
      <div className="box">
        <div className="select">
          <span className={props.todo === "SIGN IN" ? "inactive-option" : ""}>
            <Link
              className={props.todo === "SIGN IN" ? "inactive-option-link" : ""}
              to="/signin"
            >
              SIGN IN
            </Link>
          </span>
          <span className={props.todo === "SIGN UP" ? "inactive-option" : ""}>
            <Link
              className={props.todo === "SIGN UP" ? "inactive-option-link" : ""}
              to="../Main.js"
            >
              SIGN UP
            </Link>
          </span>
        </div>

        <div className="form">
          <div
            className="form-ele"
            style={{ display: props.todo === "SIGN UP" ? "flex" : "none" }}
          >
            <label htmlFor="">USERNAME</label>
            <input type="name" placeholder="Enter your username" />
          </div>

          <div className="form-ele">
            <label htmlFor="">EMAIL</label>
            <input type="email" placeholder="Enter your email ID" />
          </div>

          <div className="form-ele">
            <label htmlFor="">PASSWORD</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your password"
            />
          </div>
     
          <button onClick={handle}>Sign In</button>
        </div>

       
      </div>
    </div>
  );
}

export default SignUp;
