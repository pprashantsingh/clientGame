import React, { useEffect } from "react";
import "./Refund.css";

const Refund = ({setTermsModal}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="refund-container">
      <h1 className="title">Refund & Cancellation Policy</h1>
      <p className="updated-date">Last updated on: 12/02/2024</p>

      <section className="policy-section">
        <h2>Refund and Cancellation</h2>
        <p>
          Please read the following terms and conditions carefully before using the ROCKETBET mobile application. By accessing, registering, or using the application, you agree to be bound by these terms.
        </p>
        <p className="important-note">
          <strong>IMPORTANT NOTE:</strong> We refund your money within 30 GLOBAL BUSINESS DAYS if a contest is canceled due to a match being called off or the contest not gathering enough contestants.
          Refunds will be processed within 15 to 30 days after necessary deductions like platform/technology fees.
        </p>
      </section>

      <section className="policy-section">
        <h2>Fees and Payments</h2>
        <p>
          ROCKETBET may require payment for some services. At present, users are not charged for accessing the ROCKETBET platform.
        </p>
      </section>

      <section className="policy-section">
        <h2>Funding Accounts</h2>
        <p>
          Users can deposit funds into their ROCKETBET Wallet, categorized as “Deposit KASH.” Funds deposited by users must be utilized before any credited Deposit KASH by ROCKETBET.
        </p>
        <p className="note">
          <strong>Note:</strong> Deposit KASH credited by ROCKETBET expires after two weeks.
        </p>
      </section>

      <section className="policy-section">
        <h2>Methods of Payment</h2>
        <p>
          Payments must be made through accepted methods and in allowed currencies. Users must notify any changes in payment details.
        </p>
      </section>

      <section className="policy-section">
        <h2>Refunds & Withdrawals</h2>
        <p>
          Refunds are not provided unless required by law. Users who exit competitions or lose internet connection will not receive a refund. Withdrawals may take up to 7 business days, and KYC verification may be required.
        </p>
      </section>

      <section className="policy-section">
        <h2>Closing & Dormant Accounts</h2>
        <p>
          If an account is inactive for 12 months, the balance may be forfeited after notification.
        </p>
      </section>

      <footer className="footer">
        <p>Thanks & Regards,</p>
        <p><strong>ROCKETBET</strong></p>
      </footer>

      <div style={{ display: "flex",
            justifyContent: "flex-end",}}>
        {/* <button
          style={{
           border:"none",
           cursor:"pointer",
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
          }}
          onClick={() => setTermsModal(false)}
        >
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Refund;
