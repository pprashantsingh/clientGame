import React from "react";
import images from "../../assets";
import './Dashboard.css' 
const Dashboard=()=>{
    return(
        <>
        <div className="dashboard_container">
            <div className="dash_img_style">
                <img src={images.girlqueen} alt="girl" className="dashbord_girlImage"/>
            </div>
            <div className="dashboard_subcontainer">
                <span className="dash_heading">
                <p className="dash-p1"># World No-1</p>
                <p className="dash-p2">Most Trusted Betting App</p>
                </span>
                <p className="dash-p5">Play Any Time - Download Now</p>
                <span className="dash_btn_style">
                    <button className="dash_style">
                        <img src={images.playstore} alt="playstore" className="dash_playstore"/>
                        Google PlayStore</button>
                    <button className="dash_style">
                        <img src={images.applestore} alt="applestore" className="dash_applestore"/>
                    App Store</button>
                </span>
                <p className="dash-p3"><span className="dash_span">100%&nbsp; </span>Winning Guaranteed</p>
                <p className="dash-p4">“No Loss Here - 100% Sure Profit”</p>
            </div>
        </div>
        </>
    )
}
export default Dashboard;