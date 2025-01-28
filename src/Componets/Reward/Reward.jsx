import React from "react";
import images from "../../assets";
import "./Reward.css";

const Reward = () => {
  return (
    <div className="reward_container">
      <div className="reward_card">
        <img src={images.coin} alt="First Deposit Bonus" className="reward_image" />
        {/* <hr className="hr"/> */}
        <div className="reward_title">
          <img src={images.gift} alt="Gift Icon" />
          <p>
            200% <span>First Deposit Bonus</span>
          </p>
        </div>
        <ul className="reward_list">
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Lucrative Offers Modeled Just for you</p>
          </li>
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Wager-Free rewards</p>
          </li>
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Weekly bonuses</p>
          </li>
        </ul>
      </div>

      <div className="reward_card">
        <img src={images.cardReward} alt="Increased VIP Rewards" className="reward_image" />
        <div className="reward_title">
          <img src={images.king} alt="Crown Icon" />
          <p>
            Increased <span>VIP Rewards</span>
          </p>
        </div>
        <ul className="reward_list">
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Focus Only on your needs</p>
          </li>
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>A Private Rummy tailored exactly for you</p>
          </li>
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Unlock Premium Features</p>
          </li>
        </ul>
      </div>

      <div className="reward_card">
        <img src={images.kingchair} alt="Real Time Leaderboards" className="reward_image_king" />
        <div className="reward_title">
          <img src={images.cup} alt="Trophy Icon" />
          <p>
            Real Time <span>Leaderboards</span>
          </p>
        </div>
        <ul className="reward_list">
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Climb Top of the ladder</p>
          </li>
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Leaderboard updates in Real Time</p>
          </li>
          <li>
            <img src={images.ul} alt="Bullet Icon" />
            <p>Become the Rummy Ace</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reward;
