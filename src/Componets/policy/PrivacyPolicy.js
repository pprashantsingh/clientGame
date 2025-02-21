import React, { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = ({ setTermsModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated on, 01/Nov/2024.</p>
      <p>
        ROCKETBET (Formerly known as ROCKETBET, a sister concern Company for
        BLAKROCK NANOTECH) ("ROCKETBET," the "Company," "we," "us," and "our")
        respects your privacy and is committed to protecting it through its
        compliance with its privacy policies.
      </p>

      <h2>Information We Collect</h2>
      <p>
        ROCKETBET collects various types of information, including personal data,
        usage details, and browsing activities. This may include:
      </p>
      <ul>
        <li>Personal details such as name, email, phone number.</li>
        <li>Browsing and usage data (IP address, device info, cookies).</li>
        <li>Transaction details for reservations and purchases.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use your data to improve our services, personalize your experience,
        and ensure security. Your information may also be used for customer
        support, communication, and legal compliance.
      </p>

      <h2>Data Sharing & Storage</h2>
      <p>
        ROCKETBET may store and process your data on secure servers in India and
        abroad. Third-party service providers may have access to necessary data
        for processing payments and fulfilling services.
      </p>

      <h2>Security Measures</h2>
      <p>
        We implement industry-standard security measures to protect your data.
        However, no online system is completely secure, and we encourage
        responsible data sharing.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any queries regarding our privacy policy, payments, or technical
        issues, please contact us at:
      </p>
      <p>
        Email: <a href="mailto:therocketbet@gmail.com">therocketbet@gmail.com</a>
      </p>
      <p>Address: Street 23/21, Block-B, Patel Nagar-ND-08</p>

      <p>Thanks & Regards,</p>
      <p>
        <strong>ROCKETBET</strong>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* <button
          style={{
            border: "none",
            cursor: "pointer",
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

export default PrivacyPolicy;
