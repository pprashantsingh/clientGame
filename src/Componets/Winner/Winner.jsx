import React from "react";
import "./Winner.css";
import images from "../../assets";

const Winner = () => {
  return (
    <div className="winner-wrapper">
      {/* <div className="winner-heading-section">
        <h1 className="winner-heading">Winners</h1>
      </div> */}

      <div className="latest-winners-section">
        <div className="latest-winner">
          <p className="section-title">Latest Winners</p>
          <div className="winner-item">
            <img src={images.men1} alt="Aarav" />
            <div className="winner-details">
              <p>Aarav Just Won</p>
              <p>
                <span>Rs.5,00,000</span> in Rummy
              </p>
            </div>
          </div>
          <div className="winner-item">
            <img src={images.men2} alt="Diya" />
            <div className="winner-details">
              <p>Diya Just Won</p>
              <p>
                <span>Rs.2,00,000</span> in Rummy
              </p>
            </div>
          </div>
          <div className="winner-item">
            <img src={images.men3} alt="Ishaan" />
            <div className="winner-details">
              <p>Ishaan Just Won</p>
              <p>
                <span>Rs.1,22,488</span> in Rummy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="total-jackpot-section">
        <img src={images.pot} alt="Jackpot Pot" className="jackpot-icon" />
        <p className="jackpot-text">Total Jackpot</p>
        <p className="jackpot-amount">Rs.25,30,22,488</p>
        <div className="store-buttons">
          <button className="store-button">
            <img src={images.playstore} alt="Google Play Store" />
            Google PlayStore
          </button>
          <button className="store-button">
            <img src={images.applestore} alt="App Store" />
            App Store
          </button>
        </div>
      </div>

      <div className="top-winners-section">
        <p className="section-title">Top Winners</p>
        <div className="winner-item">
          <img src={images.men4} alt="Nikhil" />
          <div className="winner-details">
            <p>Nikhil Just Won</p>
            <p>
              <span>Rs.75,00,000</span> in Rummy
            </p>
          </div>
        </div>
        <div className="winner-item">
          <img src={images.men5} alt="Rohan" />
          <div className="winner-details">
            <p>Rohan Just Won</p>
            <p>
              <span>Rs.60,00,000</span> in Rummy
            </p>
          </div>
        </div>
        <div className="winner-item">
          <img src={images.men6} alt="Sanjana" />
          <div className="winner-details">
            <p>Sanjana Just Won</p>
            <p>
              <span>Rs.45,00,000</span> in Rummy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
