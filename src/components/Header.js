import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btndata, setbtndata] = useState("login");
  return (
    <div className="header">
      <div className="img-container">
        <img className="img" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-logout"
            onClick={() => {
              btndata === "login" ? setbtndata("logout") : setbtndata("login");
            }}
          >
            {btndata}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
