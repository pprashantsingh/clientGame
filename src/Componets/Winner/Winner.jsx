import React from "react";
import "./Winner.css";
import images from "../../assets";

const Winner = () => {
  return (
    <>
      <div className="Winner_Wrapper">
        <div className="first_winner">
          <div className="latest_winner">
          <p>Latest Winner</p>
            <div className="aarav">
              <img src={images.men1} alt="aarav" />
              <div className="text_winner">
                <p>Aarav Just Won</p>
                <p>
                  <span>Rs.5,00,000</span>in Rummy
                </p>
              </div>
            </div>
          </div>
          <div className="latest_winner">
            <div className="aarav">
              <img src={images.men2} alt="aarav" />
              <div className="text_winner">
                <p>Aarav Just Won</p>
                <p>
                  <span>Rs.5,00,000</span>in Rummy
                </p>
              </div>
            </div>
          </div>
          <div className="latest_winner">
            <div className="aarav">
              <img src={images.men3} alt="aarav" />
              <div className="text_winner">
                <p>Ishaan Just Won</p>
                <p>
                  <span>Rs.1,22,488</span>in Rummy
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second column */}
        <div className="top_wrapper">
          <img src={images.pot} alt="pot" />
          <p>Total Jack Pot</p>
          <p>Rs.25,30,22,488</p>
          <div className="winner_icon">
            <span className="winner_store">
              <button className="winner_button">
                <img
                  src={images.playstore}
                  alt="playstore"
                  className="winner_playstore"
                />
                Google PlayStore
              </button>
              <button className="dash_style">
                <img
                  src={images.applestore}
                  alt="applestore"
                  className="winner_applestore"
                />
                App Store
              </button>
            </span>
          </div>
        </div>
        {/* third here */}
        <div className="third_winner">
          <div className="latest_winner">
            <p>Top Winner</p>
            <div className="aarav">
              <img src={images.men4} alt="aarav" />
              <div className="text_winner">
                <p>Nikhil Just Won</p>
                <p>
                  <span>Rs.75,00,000</span>in Rummy
                </p>
              </div>
            </div>
          </div>
          <div className="latest_winner">
            <div className="aarav">
              <img src={images.men5} alt="aarav" />
              <div className="text_winner">
                <p>Rohan Just Won</p>
                <p>
                  <span>Rs.60,00,000</span>in Rummy
                </p>
              </div>
            </div>
          </div>
          <div className="latest_winner">
            <div className="aarav">
              <img src={images.men6} alt="aarav" />
              <div className="text_winner">
                <p>Sanjana Just Won</p>
                <p>
                  <span>Rs.45,00,000</span>in Rummy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Winner;
