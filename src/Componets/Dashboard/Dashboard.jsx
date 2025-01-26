import React from "react";
import images from "../../assets";
import './Dashboard.css' 
const Dashboard=()=>{
    return(
        <>
        <div className="dashboard_container">
            <div>
                <img src={images.girl} alt="girl" className="dashbord_girlImage"/>
            </div>
            <div className="dashboard_subcontainer">
                <span className="dash_heading">
                <p>#World No-1</p>
                <p>Most Trusted Betting App</p>
                </span>
                <p className="dash-style">Play Any Time - Get it On</p>
                <span >
                    <button className="dash_style">Google PlayStore</button>
                    <button className="dash_style">App Store</button>
                </span>
                <p>100% Winning Guaranteed</p>
                <p>“No Loss Here - 100% Sure Profit”</p>
            </div>
        </div>
        </>
    )
}
export default Dashboard;