import React from "react";
import images from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="nav_subwrapper">
        <div className="navbar_logo">
          <img src={images.logo} alt="navbar_logo" />
        </div>
        <p className="navbar_text">
            Rocket<span>BET</span>
        </p>
      </div>
      <div className="play_now">
        <img src={images.playnewicon} alt="play_icon" />
        <p>Play Now</p>
      </div>
    </div>
  );
};

export default Navbar;
