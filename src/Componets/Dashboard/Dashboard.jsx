import React, { useState, useEffect } from "react";
import images from "../../assets";
import './Dashboard.css';

const Dashboard = () => {
    const text = "# World No-1";
    const text1 = "Most Trusted Betting App";
    const [typedText, setTypedText] = useState("");
    const [typedText1, setTypedText1] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const [charIndex1, setCharIndex1] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleting1, setIsDeleting1] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 100 : 150;
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < text.length) {
                setTypedText(text.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                setTypedText(text.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === text.length) {
                setTimeout(() => setIsDeleting(true), 1000); // Wait before deleting
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, text]);

    useEffect(() => {
        const typeSpeed1 = isDeleting1 ? 100 : 150;
        const timeout1 = setTimeout(() => {
            if (!isDeleting1 && charIndex1 < text1.length) {
                setTypedText1(text1.substring(0, charIndex1 + 1));
                setCharIndex1(charIndex1 + 1);
            } else if (isDeleting1 && charIndex1 > 0) {
                setTypedText1(text1.substring(0, charIndex1 - 1));
                setCharIndex1(charIndex1 - 1);
            } else if (!isDeleting1 && charIndex1 === text1.length) {
                setTimeout(() => setIsDeleting1(true), 1000); // Wait before deleting
            } else if (isDeleting1 && charIndex1 === 0) {
                setIsDeleting1(false);
            }
        }, typeSpeed1);

        return () => clearTimeout(timeout1);
    }, [charIndex1, isDeleting1, text1]);

    return (
        <div className="dashboard_container">
            <div className="dash_img_style">
                <img src={images.girlqueen} alt="girl" className="dashbord_girlImage" />
            </div>
            <div className="dashboard_subcontainer">
                <span className="dash_heading">
                    <p className="dash_typing">{typedText}<span className="cursor">|</span></p>
                    <p className="dash-p2">{typedText1}</p>
                    {/* <p className="dash-p2">Most Trusted Betting App</p> */}
                </span>
                <p className="dash-p5">Play Any Time - Download Now</p>
                <span className="dash_btn_style">
                    {/* <button className="dash_style">
                        <img src={images.playstore} alt="playstore" className="dash_playstore"/>
                        Google PlayStore
                    </button> */}
                    {/* <button className="dash_style">
                        <a
                            href="/app-release.apk"
                            download="app-release.apk"
                            style={{ textDecoration: 'none', color: 'black' }}
                        >
                            <img src={images.playstore} alt="playstore" className="dash_playstore" />
                            Google PlayStore
                        </a>
                    </button> */}
                    <a href="/app-release.apk" download="app-release.apk" style={{ textDecoration: 'none' }}>
    <button className="dash_style">
        <img src={images.playstore} alt="playstore" className="dash_playstore" />
        Google PlayStore
    </button>
</a>

                    <button className="dash_style">
                        <img src={images.applestore} alt="applestore" className="dash_applestore" />
                        App Store
                    </button>
                </span>
                <p className="dash-p3"><span className="dash_span">100%&nbsp; </span>Winning Guaranteed</p>
                <p className="dash-p4">“No Loss Here - 100% Sure Profit”</p>
            </div>
        </div>
    );
};

export default Dashboard;
