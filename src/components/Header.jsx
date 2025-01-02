import { LOGO_URL } from "../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName ,setbtnName]=useState("Login")
  const Os=useOnlineStatus();
  useEffect(()=>{
    //console.log("use effect called")
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
            <li>Online Status :{Os?"green":"red"}</li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Contact">Contact Us</Link></li>
            <li>Cart</li>
           <button className="login" onClick={()=>{btnName=="Login"?setbtnName("Logout"):setbtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;