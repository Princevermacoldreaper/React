import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
const Header = () => {
  const [btnName ,setbtnName]=useState("Login")
  useEffect(()=>{
    console.log("use effect called")
  },[btnName]);
    return (
      <div className="header">
        <div className="logo-container">

          <img
            className="logo"
            src={LOGO_URL}
            alt="res-logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
           <button className="login" onClick={()=>{btnName=="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;