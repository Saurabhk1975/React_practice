import { LOGO_URL } from "../utils/constants";


const Header = () => {
    return (
      <div className="header">
        <div className="img-container">
          <img
            className="img"
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;