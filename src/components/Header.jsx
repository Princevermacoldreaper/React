import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const Os = useOnlineStatus();
  useEffect(() => {
    //console.log("use effect called")
  }, [btnName]);
  return (
    <div className="flex justify-between bg-pink-300 mb-2 shadow-lg ">
      <div className="logo-container">
        <img className="w-[100px] h-[100px]" src={LOGO_URL} alt="res-logo" />
      </div>
      <div className="flex items-center  text-xl p-[10px] m-[12px] pr-[5px]">
        <ul className="flex justify-between px-[10px]  blue ">
          <li className="px-4">Online Status :{Os ? "green" : "red"}</li>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="inline-flex items-center justify-center 
    bg-white text-gray-800 
    rounded-3xl shadow-md 
    px-5 py-0 text-sm font-medium 
    cursor-pointer
    transition-transform duration-300 ease-in-out 
    hover:bg-blue-50 hover:text-blue-700 
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
    active:shadow-lg 
    disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
