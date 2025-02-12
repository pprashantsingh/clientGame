import React from "react";
import "./Cookie.css";

const Cookie = () => {
  return (
    <>
      <div className="cookies-container">
        <h2>COOKIES POLICY</h2>
        <p className="last-updated">Last updated on, 12/02/2025</p>

        <section>
          <p>
            ROCKETPE, and third parties with whom we partner, may use cookies,
            tags, web beacons, mobile device IDs, "flash cookies," and similar
            technologies to collect and store information in respect to your use
            of the Services and third-party websites.
          </p>
          <p>
            A cookie is a small text file stored on your device that enables us
            to recognize you when you visit our website, store your preferences,
            enhance your experience, and perform analytics. Cookies may be
            persistent or session-based.
          </p>
          <p>
            Pixel tags (also called web beacons) are tiny graphics used to track
            activities on a webpage, emails, or ads. ROCKETPE may use these to
            measure the popularity of features and improve user experience.
          </p>
        </section>

        <h3>SECURITY</h3>
        <p>
          We prioritize the confidentiality, integrity, and accessibility of
          your information. Data is stored in an encrypted, password-protected
          database within a secure network.
        </p>
        <p>
          While we implement strong security measures, transmitting information
          online is never 100% secure, and we cannot guarantee complete data
          security.
        </p>

        <h3>PROTECTION OF MINORS</h3>
        <p>
          Our services are not intended for individuals under 18 years of age.
          We take steps to detect and prevent minors from accessing our
          services.
        </p>

        <h3>THIRD-PARTY RELATIONSHIPS</h3>
        <p>
          We are not responsible for the protection of information shared with
          third-party websites linked to our services. Users should review
          third-party privacy policies before sharing data.
        </p>

        <h3>LEGAL DISCLAIMER</h3>
        <p>
          We strive to protect user data but are not responsible for external
          security breaches, unauthorized access, or indirect damages arising
          from unlawful use.
        </p>

        <h3>CONSENT TO PRIVACY POLICY</h3>
        <p>
          By using our services, you agree to our Privacy Policy, including data
          collection and processing. We may periodically update this policy and
          notify users accordingly.
        </p>

        <h3>THE USE OF DATA</h3>
        <p>
          Your personal information is used to provide our services, process
          transactions, offer customer support, and enhance security. We may
          share information with partners to improve service delivery.
        </p>
        <p>
          From time to time, we may collect user feedback via surveys or
          competitions. Participation is voluntary, and personal data may be
          used for promotional purposes.
        </p>

        <p className="thanks">
          Thanks & Regards, <br /> ROCKETPE
        </p>
      </div>
    </>
  );
};

export default Cookie;
