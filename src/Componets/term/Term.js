import React, { useEffect } from "react";
import "./Term.css";

const Term = ({ setTermsModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="term-container">
      <h1 className="title">Terms & Conditions Policy</h1>
      <p className="updated-date">Last updated on: 12/02/2025</p>

      <section className="policy-section">
        <p>
          This document is an electronic record in compliance with the
          Information Technology Act, 2000 and the Rules and Regulations framed
          thereunder, as applicable and the amended provisions pertaining to
          electronic records in various statutes as amended by the Information
          Technology Act, 2000. This electronic record is generated by a
          computer system and does not require any physical or digital
          signatures.
        </p>
        <p>
          Please read the following terms and conditions carefully before
          browsing, registering, accessing, or using the mobile application
          “ROCKETBET”. By accessing, registering on or using the Merchant
          dashboard and/or the Application, you agree to be bound by the terms
          and conditions set forth below including any additional guidelines and
          future modifications thereto. If, at any point of time, you do not
          agree to these terms and conditions or do not wish to be bound by any
          of these terms and conditions, you may not access or use the
          Application and terminate the use of the Application in accordance
          with the terms and conditions contained herein.
        </p>
      </section>

      <section className="policy-section">
        <h2>General Terms and Definitions</h2>
        <p>
          The following Rules pertaining to the bookmaker ROCKETBET (hereinafter
          referred to as the Rules) stipulate the manner of accepting Orders,
          paying winnings and resolving disputes, as well as the specific
          features of certain Orders on certain sports. These Rules shall govern
          any other relations Game when the bookmaker ROCKETBET and the
          customer.
        </p>
        <p>
          These Rules shall apply to the website and at ROCKETBET facilities.
        </p>
        <ul>
          <li>
            <strong>Gaming:</strong> is a risk-driven agreement for potential
            winnings entered into Game when the customer and the bookmaker under
            the established Rules, where the fulfillment of such agreement is
            conditioned by an event whose outcome is yet to be determined. Games
            are accepted on the conditions offered by the bookmaker.
          </li>
          <li>
            <strong>Outcome:</strong> is the result of the event (events) on
            which the Game was placed.
          </li>
          <li>
            <strong>Customer:</strong> Tis an individual placing a Game with the
            bookmaker on an outcome.
          </li>
          <li>
            <strong>Game Cancellation:</strong> is an outcome on which the Game
            is not settled and winnings are not paid. As per the Rules, in the
            event of “Game cancellation”, an arrangement Game when the bookmaker
            and the customer shall be deemed unconcluded and the stake shall be
            refunded.
          </li>
          <li>
            <strong>Regular Time:</strong> is the duration of the match subject
            to the regulations of the relevant sport, including time added by
            the referee. Regular time does not include extra time, overtime(s),
            penalty shootouts, etc.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Restrictions on Inclusion of Certain Outcomes</h2>
        <ul>
          <li>
            1. The accumulator cannot contain any related outcomes. Should an
            accumulator (system) consist of two or more related outcomes,
            outcomes with the lowest odds will be excluded from the accumulator
            (system). Related outcomes (related events) are those when one part
            of the order affects another part of the order.
          </li>
          <li>
            2. A “Team to score a penalty Yes/No” market will be deemed lost if
            no penalty is awarded during regular time.
          </li>
          <li>
            3. “How the goal will be scored” and “Next goal” markets will be
            deemed lost if the goal number specified in the order is not scored.
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Deposits and Withdrawals</h2>
        <ul>
          <li>
            1. There are various ways of depositing and withdrawing funds from
            the Customer's account. All deposit and withdrawal methods can be
            found in the “Payments” section.
          </li>
          <li>2. All withdrawal requests are processed 24/7.</li>
          <li>3. The ROCKETBET Security Service is entitled to:</li>
          <p>
            o Decline cash withdrawal requests if deposits were made through
            e-payment systems.
          </p>
          <p>
            o refuse any withdrawal should the deposit or withdrawal amounts be
            inconsistent with ORDER placed (the Customer must place ORDER with
            stakes which add up to the sum of all deposits and the ORDER must
            have odds of at least 1.1; placing a high volume of ORDER that have
            a minimal impact on your balance shall not be taken into account,
            i.e. Permitted withdrawal amounts shall be calculated based on the
            amount of the ORDER placed from any given deposit.
          </p>
          <p>
            o Refuse any withdrawal if the ORDER account is misused. In this
            case your account must be verified before withdrawal can take place.
          </p>
          <li>
            4. The ROCKETBET Security Service does not recommend Customers:
            <p>- transfer funds from one payment system to another;</p>
            <p>- deposit and withdraw funds without placing ORDER;</p>
            <p>
              In the foregoing events, funds will be returned to your account.
            </p>
          </li>
          <li>
            5. You can only withdraw funds using the same payment details that
            were used for depositing funds into your account. If you use
            different methods to make a deposit, withdrawals should be
            proportionate to the deposits made using any particular method.
          </li>
          <li>
            6. ROCKETBET may refuse withdrawals via payment systems or in cash
            and offer a bank transfer as a substitute.
          </li>
          <li>
            <strong>7. ATTENTION!</strong> Our administration does not recommend
            making deposits and withdrawing funds using someone else’s
            electronic wallet.
          </li>
          <li>
            o Our Security Team reserves the right to deem such deposits to be
            fraudulent and block users’ transactions without prior notification.
          </li>
          <li>
            o Our administration is entitled to deny withdrawals of funds using
            payment details which do not belong to the account holder.
          </li>
          <li>
            8. In certain circumstances and in respect to certain customers
            ROCKETBET may decide not to reimburse service charges imposed by
            payment systems on deposits or withdrawals, which ROCKETBET usually
            reimburses.
          </li>
          <li>
            9. If a customer doesn't comply with the Company's rules (for
            example by breaching the T&C, not placing aORDER before requesting a
            withdrawal, etc.), the Company reserves the right to refuse to allow
            that customer to make a withdrawal.
          </li>
          <li>
            10. ROCKETBET WILL TRY TO REFUND THE AMOUNT WITHIN 15 TO 30 GLOBAL
            BUSINESS DAYS ONLY AFTER DEDUCTIONS LIKE (PLATEFORM FEE / TECHNOLOGY
            FEE …ETC).
          </li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>Your Registration and Account Obligations</h2>
        <p>
          You need to set up an account with Us through a ROCKETBET
          representative (“ROCKETBET Account“) and provide certain information
          about yourself as prompted by the information form, including, your
          name, gender/type of entity, email address, account password, mobile
          phone number and billing/shipping address. All of your registration
          information is protected by our Privacy Policy. You will not be
          eligible to create a ROCKETBET Account unless:
        </p>
        <p>a) You are of legal drinking age in your state of residence;</p>
        <p>
          You shall be solely responsible for maintaining the confidentiality of
          your assigned User ID and Password of ROCKETBET Account and shall be
          responsible for all activities that occur under Your User ID and
          Password. You agree that if You provide any information that is
          inaccurate, false, or incomplete or we have reasonably sufficient
          evidence or grounds to believe that such information is inaccurate,
          false, or incomplete or not in accordance with these Terms, we shall
          have the right to indefinitely suspend or terminate or block access of
          Your ROCKETBET Account on the ROCKETBET Application and refuse to
          provide You with access to the ROCKETBET Application.
        </p>
      </section>

      <section className="policy-section">
        <h2>Entire Agreement</h2>
        <p>
          This is the entire agreement Game when us relating to the subject
          matter hereof and will not be modified except in writing, signed by
          both parties, or by a change to this Agreement made by Us in
          accordance with the terms of this Agreement.
        </p>
      </section>

      <section className="policy-section">
        <h2>Contact Information</h2>
        <p>
          If you have any queries relating to the processing/ usage of
          information/Payments/Refunds/ Technical Issues…Etc. provided by you or
          ROCKETBET Privacy Policy, you may email at{" "}
          <strong>therocketbet@gmail.com </strong> or {" "}
          <strong>support@rocketbet.club </strong> or write to us at the following
          address – <strong>Street 23/21, Block-B, Patel Nagar-ND-08</strong>.
        </p>
        <p>
          Our Team will solve Your Query As soon as Possible with Immediate
          Effects.
        </p>
      </section>

      <footer className="footer">
        <p>Thanks & Regards,</p>
        <p>
          <strong>ROCKETBET</strong>
        </p>
      </footer>
    </div>
  );
};

export default Term;
