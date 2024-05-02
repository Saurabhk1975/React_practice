import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btndata, setbtndata] = useState("Login");
  const onlineStatus = useInternetStatus();

  // Using This hooks Subscribing our store for reading the data
  const cartItem = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg bg-blue-400">
      <div className="img-container">
        <img className="w-48 " src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex item-center">
        <ul className="flex p-6 m-6 text-xl text-slate-50	font-bold ">
          <li className="px-4">Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:underline font-bold">
            <Link to="/cart"> 🛒({cartItem.length} items)</Link>
          </li>

          <li>
            <button
              className="hover:bg-red-300 px-2"
              onClick={() => {
                btndata === "Login"
                  ? setbtndata("LogOut")
                  : setbtndata("Login");
              }}
            >
              {btndata}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
