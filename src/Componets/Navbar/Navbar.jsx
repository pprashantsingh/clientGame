import React from "react";
import images from "../../assets";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar_wrapper">
      <div className="nav_subwrapper">
        <div >
          <img src={images.logo} alt="navbar_logo" className="navbar_logo"/>
        </div>
        <p className="navbar_text">
            Rocket<span>BET</span>
        </p>
      </div>
      <a href="/app-release.apk" download="app-release.apk" style={{ textDecoration: 'none' }}>
      <div className="play_now">
      
        <img src={images.playnewicon} alt="play_icon" className="nav_Play_icon"/>
        <p>Play Now</p>
        
      </div>
      </a>
    </div>
  );
};

export default Navbar;
