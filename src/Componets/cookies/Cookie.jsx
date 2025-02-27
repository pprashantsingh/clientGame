import React, { useEffect } from "react";
import "./Cookie.css";

const Cookie = ({setTermsModal}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
          <div className="cookies-container">
      <h2>COOKIES POLICY</h2>
      <p className="last-updated">Last updated on, 12/02/2025</p>

      <section>
        <p>
          ROCKETBET
, and third parties with whom we partner, may use cookies, tags, web, mobile device IDs, "flash cookies" and similar files or technologies to collect and store information in respect to your use of the Services and third-party websites. A cookie is a small text file that is stored on your computer/Mobile/Tab that enables us to recognize you (for example, as a registered user) when you visit our website, store your preferences and settings, enhance your experience by delivering content and advertising specific to your interests, perform research and analytics, track your use of our Services, and assist with security and administrative functions. Cookies may be persistent or stored only during an individual session. A pixel tag (also called a web beacon or clear GIF) is a tiny graphic with a unique identifier, embedded invisibly on a webpage (or an online ad or email…etc.), and is used to count or track things like activity on a webpage or ad impressions or clicks… etc. as well as to access cookies stored on users' computer/Mobile/Tab. ROCKETBET
 may use pixel tags to measure the popularity of our various pages, features and services. We also may include web beacons in e-mail messages or newsletters to determine whether the message has been opened and for other analytics.
        </p>
      </section>

      <h3>SECURITY</h3>
      <p>
        We understand the importance of providing security and the methods needed to secure the confidentiality, integrity, and accessibility of information. We store all personal information we receive directly from you in an encrypted and password-protected database stored within our secure network behind active up-to-date firewall software.
      </p>
      <p>
        Our Services support SSL Version 3 with 128-bit encryption. We also take measures to ensure our subsidiaries, agents, partners, affiliates, and suppliers employ adequate security measures. However, sending information via the internet is usually not completely secure, and we cannot guarantee the security of your data while it is being sent.
      </p>
      <p>
        ANY DATA, WHICH YOU SEND, IS SENT AT YOUR OWN RISK. ROCKETBET
 has all security procedures and features in place to protect your data after it is received.
      </p>

      <h3>PROTECTION OF MINORS</h3>
      <p>
        Our services are not intended for persons under the age of eighteen (18) or the lawful age in their respective jurisdiction. Any person who provides their information to us through any part of the services confirms to us that they are eighteen (18) years of age (or the lawful age in their respective jurisdiction) or older.
      </p>
      <p>
        It is our policy to uncover attempts by minors to access our services which may require an additional security review. If we become aware that a minor has attempted to or has submitted personal information via our services, we will not accept their information and will take all steps to purge the information from our records.
      </p>

      <h3>THIRD-PARTY RELATIONSHIPS</h3>
      <p>
        We cannot ensure the protection of any information that you provide to a third-party website that links to our services or of any other information collected by any third party managing it in compliance with our affiliate program (if applicable) or otherwise, since these third-party online services and websites are not owned by us and are operated independently from us.
      </p>
      <p>
        Be careful. Any information collected by these third parties is governed by the privacy policy, if any, of such third party.
      </p>

      <h3>LEGAL DISCLAIMER</h3>
      <p>
        We are not responsible for events beyond our direct control. Due to the complex and ever-changing nature of our technologies and business, we provide comprehensive, but we do not guarantee an error-free, operation regarding the confidentiality of your personal information when you visit other websites using links located on our website. Websites that are beyond our control, and especially not covered by this Privacy Policy should provide you with an opportunity to familiarize yourself with their security policies. If you visit other websites, you should be aware that the operators of these websites can collect your personal information, which they will use in accordance with their privacy policy, which will differ from ours.
      </p>
      <p>
        Be careful. We do not guarantee the security of your data, while it is being transmitted through channels of communication. ANY DATA, WHICH YOU SEND, IS SENT AT YOUR OWN RISK.
      </p>
      <p>
        We are also not responsible for any direct or indirect damage arising from the unlawful use or theft of your Personal Information.
      </p>

      <h3>CONSENT TO PRIVACY POLICY</h3>
      <p>
        Your use of our services is your voluntary agreement with our Privacy Policy and you thereby give us the right to collect, process, and store your personal data.
      </p>
      <p>
        This Privacy Policy should be read in conjunction with our Terms and Conditions and any additional applicable Terms and Conditions published on our platforms and websites. We may periodically make changes to this Privacy Policy and will notify you of these changes by publishing the modified terms on our platforms and websites. Your continued use of our services following any changes to this Privacy Policy constitutes your acceptance of the changes.
      </p>
      <p>
        This is our entire and exclusive Privacy Policy; it supersedes any earlier version and applies only to ROCKETBET
. We recommend that you revisit this Privacy Policy regularly.
      </p>

      <h3>THE USE OF DATA</h3>
      <p>
        We use the personal information that you provide to us to deliver our Services, to provide customer support, to ensure the necessary security, for identity verification and checks, to process any of your online transactions, as well as to assist your participation in third-party promotions, that meet certain business conditions, and for any other purposes related to the operation of our gaming Services.
      </p>
      <p>
        Therefore, during the provision of our services, we may share your personal information with our carefully selected partners (including any other parties that have arrangements with you about the sharing of your data). Your personal information may also be used by us to provide you with:
        <ul>
          <li>promotional offers and information about our products and services</li>
          <li>promotional offers and information about our partners’ products and services, in order to enlarge the range of products provided to you and improve our customer service</li>
        </ul>
      </p>
      <p>
        From time to time, we may request information from you via surveys or competitions. Participation in these surveys or competitions is completely voluntary and you have the choice of whether or not to disclose your personal information. Information requested may include contact details (such as name, correspondence address, telephone number), and geographic information (such as postal code or postal address), age.
      </p>
      <p>
        By taking part in any competition or accepting winnings (prizes) from us, you consent to the use of your name for promotional purposes without additional remuneration, except where prohibited by law.
      </p>
      <p>
        If you have not unequivocally decided whether to receive promotional information from us, we may use your personal information (including your e-mail address and phone number) to provide you with information regarding our products, services, and promotions, including other products and third-party products and services carefully selected by us.
      </p>

      <p className="thanks">
        Thanks & Regards, <br /> ROCKETBET

      </p>
    </div>
    </>
  );
};

export default Cookie;
