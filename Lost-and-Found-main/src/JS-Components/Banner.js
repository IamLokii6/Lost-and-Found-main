import React from "react";
import "../CSS-Components/Navbar.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";

function Banner() {
  return (
    <div className="navbar">
      {/* temporary logo - TO BE CHANGED */}
      {/* leftmost div - containing logo only */}
      <div className="logo">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHkAAAB5CAMAAAAqJH57AAAAaVBMVEX///8AAADk5OSZmZnIyMh2dnbCwsK6urq+vr63t7fg4OBwcHD6+vrFxcWIiIj39/fZ2dnx8fGsrKx9fX1ra2thYWFKSkqioqJmZmaRkZEqKipQUFDQ0NA/Pz81NTVVVVUWFhYdHR0NDQ2KjMDgAAABt0lEQVRoge2Y23KCMBRFSUQIyD0SvFGU///IckJAkT51TOh09nqBc+LMMiI7BM8DAAAAAAAAAAAAAOAPEzdRmPqEiKrQqTmrmUHJyKV5IL9q8c2xlkhJfNhA7HEyZ5uZdzDD/O/NZb2VuWHOUnRpzlv2tY1ZOMzwpbkbiuMW5pteuPgG5lo5XD9ezfGFt1SWzs0y83ZUNq7N+XCFSyrb3LG5oUcTSbUwg4ksnJgZaWKqOzNY3p2YA6Ub9csTIWexC7MKdMOnxmkcFDbv7dlcMNN5UGec69G6+TycHCrTqeY04b11c0bHxHSSfuj0lCZ7ZvM6B2xcJLLz3JrShI72/ttlN+5uyvYZmZwm/eAnGvDtaGN5uJsd3ReTe8Mx37MZSztM3kQi0KRpIMIwjIiKF/q7CDq3mCQjt+XK2D1vLNuodFHqNNm7EBfXZFEnytUyPafIRDXli2XK1fRyitCL/Umfu3WLJv3+S3ycnMlVT4dqm/zw6U9yYmrdZA4mnQ0K+T47f4ywwKK3uGhFX7/s5EKppvSs7S2TcSXoJWBYiWdPVJFu+kHYuEkyAAAAAAAAAAAAAAB+yTeq6A94DJHkCgAAAABJRU5ErkJggg=="
          alt=""
        />
      </div>

    
      <Link className="link-div" id="signup" to="signup" todo="SIGN UP">
        SIGN UP
      </Link>
    </div>
  );
}

export default Banner;
