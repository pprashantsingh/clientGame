import React from "react";
import "./Term.css";

const Term = ({ setTermsModal }) => {
  return (
    <div className="term-container">
      <h1 className="title">Terms & Conditions Policy</h1>
      <p className="updated-date">Last updated on: 12/02/2025</p>

      <section className="policy-section">
        <p>
          This document is an electronic record in compliance with the
          Information Technology Act, 2000, and its applicable rules and
          regulations. This electronic record does not require any physical or
          digital signatures.
        </p>
        <p>
          Please read the following terms and conditions carefully before
          browsing, registering, accessing, or using the ROCKETPE mobile
          application. By accessing or registering on the application, you agree
          to these terms. If you do not agree, you must stop using the
          application.
        </p>
      </section>

      <section className="policy-section">
        <h2>General Terms and Definitions</h2>
        <p>
          The following rules define how orders are accepted, winnings are paid,
          and disputes are resolved in ROCKETPE.
        </p>
        <ul>
          <li>
            <strong>Gaming:</strong> A risk-driven agreement for potential
            winnings between the customer and the bookmaker.
          </li>
          <li>
            <strong>Outcome:</strong> The result of an event on which the game
            was placed.
          </li>
          <li>
            <strong>Game Cancellation:</strong> A game where the outcome is not
            settled, and winnings are not paid.
          </li>
          <li>
            <strong>Regular Time:</strong> The match duration, including
            referee-added time but excluding extra time or penalty shootouts.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Restrictions on Inclusion of Certain Outcomes</h2>
        <ul>
          <li>Accumulators cannot contain related outcomes.</li>
          <li>
            "Team to score a penalty" bets will be lost if no penalty is awarded
            during regular time.
          </li>
          <li>
            "How the goal will be scored" bets will be lost if the specified
            goal is not scored.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Deposits and Withdrawals</h2>
        <p>
          Users can deposit and withdraw funds via multiple methods. Withdrawal
          requests are processed 24/7.
        </p>
        <ul>
          <li>
            The ROCKETPE Security Service can decline withdrawals under specific
            conditions.
          </li>
          <li>
            Withdrawals must be made using the same method used for deposits.
          </li>
          <li>Fraudulent transactions may result in account suspension.</li>
          <li>
            Refunds, after deductions, will be processed within 15-30 business
            days.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Your Registration and Account Obligations</h2>
        <p>
          Users must set up an account with ROCKETPE and provide accurate
          personal information. Any false or misleading information may result
          in account suspension.
        </p>
      </section>

      <section className="policy-section">
        <h2>Entire Agreement</h2>
        <p>
          This agreement represents the complete terms between ROCKETPE and
          users, and modifications will only be made in writing.
        </p>
      </section>

      <section className="policy-section">
        <h2>Contact Information</h2>
        <p>
          For queries regarding payments, refunds, or technical issues, contact
          us at <strong>therocketpe@gmail.com</strong> or visit our office at{" "}
          <strong>Street 23/21, Block-B, Patel Nagar-ND-08</strong>.
        </p>
      </section>

      <footer className="footer">
        <p>Thanks & Regards,</p>
        <p>
          <strong>ROCKETPE</strong>
        </p>
      </footer>
      <div style={{ display: "flex",
            justifyContent: "flex-end",}}>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default Term;
