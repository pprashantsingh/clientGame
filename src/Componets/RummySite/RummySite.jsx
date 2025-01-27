import React from "react";
import "./RummySite.css";
import images from "../../assets";

const RummySite = () => {
  return (
    <>
      <div className="rummy_wrapper">
        <p className="rummy_heading">India’s most trusted Rummy site</p>
        <div className="rummy_features">
          {/* Feature 1 */}
          <div className="feature_card">
            <img src={images.card} alt="Rocket Bet" className="feature_image" />
            <h3>
              Play the Most Loved <span>Rocket Bet Games</span>
            </h3>
            <ul>
              <li>✔ Play Points Pool & deals Rummy</li>
              <li>✔ Play 24*7 Online Anytime Here</li>
              <li>✔ Free Tournaments Every Day Rocket Bet</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="feature_card">
            <img src={images.hund} alt="Safe and Secure" className="feature_image" />
            <h3>
              100% <span>Safe and Secure</span>
            </h3>
            <ul>
              <li>✔ RNG & No-Bot Certified Games</li>
              <li>✔ 100% Secure Transactions</li>
              <li>✔ SSL & PCI DSS Compliant</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="feature_card">
            <img src={images.mulcard} alt="Great Rummy" className="feature_image" />
            <h3>
              The Great <span>Rummy Experience</span>
            </h3>
            <ul>
              <li>✔ 8 Crore+ Players - No Waiting Time</li>
              <li>✔ Fastest Gaming Table Without Loss</li>
              <li>✔ Seamless Gameplay</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="feature_card">
            <img src={images.res} alt="Responsible Gaming" className="feature_image" />
            <h3>
              <span>Responsible Gaming</span>
            </h3>
            <ul>
              <li>✔ Strict Fair Play & Responsible Policies</li>
              <li>✔ Pre-defined Deposit Limit</li>
              <li>✔ World-Class Anti-Fraud System</li>
            </ul>
          </div>

          {/* Feature 5 */}
          <div className="feature_card">
            <img src={images.vip1} alt="Rewards and VIP Services" className="feature_image" />
            <h3>
              Best <span>Rewards & VIP Services</span>
            </h3>
            <ul>
              <li>✔ Exclusive Bonuses & Promotions</li>
              <li>✔ Free Entry to VIP Tournaments</li>
              <li>✔ 24x7 Customer Support</li>
            </ul>
          </div>

          {/* Feature 6 */}
          <div className="feature_card">
            <img src={images.Withdrawal} alt="Fastest Withdrawals" className="feature_image" />
            <h3>
              Fastest Withdrawals - <span>10 Secs Only</span>
            </h3>
            <ul>
              <li>✔ Fastest Withdrawal Processing</li>
              <li>✔ Request Withdrawals 24x7</li>
              <li>✔ Zero Withdrawal Fee</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RummySite;
