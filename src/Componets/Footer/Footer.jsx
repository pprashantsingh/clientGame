import React, { useState } from "react";
import "./footer.css";
import images from "../../assets";
import Modal from "react-modal";
import Term from "../term/Term";
import PrivacyPolicy from "../policy/PrivacyPolicy";
import Cookie from "../cookies/Cookie";
import Refund from "../RefundCancel/Refund";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  // const [termsModal, setTermsModal] = useState(false);
  const [footerSubjects, setFooterSubjects] = useState(-1);
  const navigate = useNavigate();
  return (
    <>
      {/* <Modal isOpen={termsModal} contentLabel="Example Modal">
        {footerSubjects === 1 && <PrivacyPolicy setTermsModal={setTermsModal} />}

        {footerSubjects === 2 && <Term setTermsModal={setTermsModal} />}

        {footerSubjects === 3 && <Cookie setTermsModal={setTermsModal} />}

        {footerSubjects === 4 && <Refund setTermsModal={setTermsModal} />}
      </Modal> */}
      <div className="footer_container">
        <div className="_footer_container_row">
          <div className="_footer_container_row_col-1">
            <div className="navbar_top_image_container">
              <div className="_footer_image_container">
                <img src={images?.logobg} alt="" />
              </div>
              <div className="_footer_rocket_bet_title">
                <p>
                  ROCKET <span>BET</span>
                </p>
              </div>
            </div>

            <div className="showhide_footercontent1">
              <p className="support_team_title">24/7 Support Team</p>

              <div className="_footer_mail_container">
                <div className="_mail_image_container">
                  <img src={images?.mail} alt="" />
                </div>
                <div className="_mail_title_container">
                  <p className="_mail_title">therocketbet@gmail.com</p>
                </div>
              </div>

              <div className="_footer_location_container">
                <div className="_mail_image_container">
                  <img src={images?.location} alt="" />
                </div>
                <div className="_mail_title_container">
                  <p className="_mail_title">
                    No:30, 1st street ,Patel Nagar ND - 08
                  </p>
                </div>
              </div>
            </div>

            <div className="showhide_footercontent1">
              <div className="_footer_availabel_on">
                <p className="availabel_on_title">Instant Download Here</p>

                {/* <div className="_availabel_on_image_container">
                  {/* <div className="_image_container_1">
                    <img src={images?.playstores} alt="" />
                  </div> 
                  <div className="_image_container_1">
                    <a
                      href="/app-release.apk"
                      download="app-release.apk"
                      style={{
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                    >
                      <img
                        src={images?.playstores}
                        alt="Play Store"
                        className="your-image-class"
                      />
                    </a>
                  </div>

                  <div className="_image_container_1">
                    <img src={images?.appStore} alt="" />
                  </div>
                </div> */}

                <div className="_image_container_1">
                  <a
                    href="/app-release.apk"
                    download="app-release.apk"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="footer_style">
                      <img
                        src={images.playstore}
                        alt="playstore"
                        className="footer_playstore"
                      />
                      Google PlayStore
                    </button>
                  </a>

                  <button className="footer_style">
                    <img
                      src={images.applestoreapp}
                      alt="applestore"
                      className="footer_applestore"
                    />
                    App Store
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_wrapper_1">
            <div className="_footer_container_row_col">
              <p className="_footer_title_container">World Class Security</p>

              <div className="_footer_spade_attributes">
                <img src={images?.spade} alt="" />
                <p className="_footer_spade_title">SSL Secured</p>
              </div>
              <div className="_footer_spade_attributes">
                <img src={images?.spade} alt="" />
                <p className="_footer_spade_title">
                  Stringent Fair play Secure
                </p>
              </div>
              <div className="_footer_spade_attributes">
                <img src={images?.spade} alt="" />
                <p className="_footer_spade_title">Third Party Audited</p>
              </div>
              <div className="_footer_spade_attributes">
                <img src={images?.spade} alt="" />
                <p className="_footer_spade_title">Verified RNG</p>
              </div>
              <div className="showhide_footercontent1">
                <div className="_footer_col_media_to_follow">
                  <p className="_footer_spade_title">Follow Us On</p>

                  <div className="_follow_us_on_media_image_container">
                    {/* <img src={images?.facebook} alt="" />
                    <img src={images?.insta} alt="" />
                    <img src={images?.twitter} alt="" />
                    <img src={images?.telegram} alt="" /> */}
                    <img
                      src={images?.facebook}
                      alt="Facebook"
                      onClick={() =>
                        window.open("https://www.facebook.com/", "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={images?.insta}
                      alt="Instagram"
                      onClick={() =>
                        window.open("https://www.instagram.com/", "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={images?.twitter}
                      alt="Twitter"
                      onClick={() =>
                        window.open("https://twitter.com/", "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={images?.telegram}
                      alt="Telegram"
                      onClick={() => window.open("https://t.me/", "_blank")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="_footer_container_row_col">
              <p
                className="_footer_title_container"
                style={{ cursor: "pointer" }}
              >
                Know More
              </p>

              <div className="_footer_spade_attributes">
                <img src={images?.spade} alt="" />
                <p
                  className="_footer_spade_title"
                  style={{ cursor: "pointer" }}
                  // onClick={()=>{setTermsModal(true);setFooterSubjects(1)}}
                  onClick={() => navigate("/privacy-policy")}
                >
                  Privacy Policy
                </p>
              </div>
              <div className="_footer_spade_attributes1">
                <img src={images?.spade} alt="" />
                <p
                  className="_footer_spade_title"
                  // onClick={()=>{setTermsModal(true);setFooterSubjects(2)}}
                  onClick={() => navigate("/terms-and-conditions")}
                  style={{ cursor: "pointer" }}
                >
                  Terms & Condition
                </p>
              </div>
              <div className="_footer_spade_attributes1">
                <img src={images?.spade} alt="" />
                <p
                  className="_footer_spade_title"
                  style={{ cursor: "pointer" }}
                  // onClick={()=>{setTermsModal(true);setFooterSubjects(3)}}
                  onClick={() => navigate("/cookie-policy")}
                >
                  Cookies
                </p>
              </div>
              <div className="_footer_spade_attributes1">
                <img src={images?.spade} alt="" />
                <p
                  //  onClick={()=>{setTermsModal(true);setFooterSubjects(4)}}
                  onClick={() => navigate("/refund-policy")}
                  className="_footer_spade_title"
                  style={{ cursor: "pointer" }}
                >
                  Refund Policy
                </p>
              </div>
            </div>
          </div>

          <div className="_footer_container_row_col">
            <p className="_footer_title_container">Security & Game Integrity</p>
            <div className="_game_integraty_container">
              <img src={images?.gambling} alt="" />
              <img src={images?.fraud} alt="" />
              <img src={images?.knowUrLimit} alt="" />
              <img src={images?.eighteen} alt="" />
              <img src={images?.cross} alt="" />
              <img src={images?.legal} alt="" />
              <img src={images?.twofour} alt="" />
              <img src={images?.ring} alt="" />
            </div>

            <div className="_our_payment_partner_container ">
              <p className="_footer_title_container">Our Payment Partners</p>
              <div className="_game_integraty_container">
                <img src={images?.googlepay} alt="" />
                <img src={images?.paytm} alt="" />
                <img src={images?.phonepay} alt="" />
                <img src={images?.amazonPay} alt="" />
              </div>

              <div className="showhide_footercontent">
                <p className="support_team_title">24/7 Support Team</p>

                <div className="_footer_mail_container">
                  <div className="_mail_image_container">
                    <img src={images?.mail} alt="" />
                  </div>
                  <div className="_mail_title_container">
                    <p className="_mail_title">therocketbet@gmail.com</p>
                  </div>
                </div>

                <div className="_footer_location_container">
                  <div className="_mail_image_container">
                    <img src={images?.location} alt="" />
                  </div>
                  <div className="_mail_title_container">
                    <p className="_mail_title">
                      No:30, 1st street ,Patel Nagar ND - 08
                    </p>
                  </div>
                </div>
              </div>

              <div className="showhide_footercontent">
                <div className="_footer_availabel_on">
                  <p className="availabel_on_title">Instant Download Here</p>

                  {/* <div className="_availabel_on_image_container">
                    {/* <div className="_image_container_1">
                      <img src={images?.playstores} alt="" />
                    </div> 
                    <div className="_image_container_1">
                      <a
                        href="/app-release.apk"
                        download="app-release.apk"
                        style={{
                          textDecoration: "none",
                          display: "inline-block",
                        }}
                      >
                        <img
                          src={images?.playstores}
                          alt="Play Store"
                          className="your-image-class"
                        />
                      </a>
                    </div>

                    <div className="_image_container_1">
                      <img src={images?.appStore} alt="" />
                    </div>
                  </div> */}

                  <div className="_availabel_on_image_container">
                    <a
                      href="/app-release.apk"
                      download="app-release.apk"
                      style={{ textDecoration: "none" }}
                    >
                      <button className="footer_style">
                        <img
                          src={images.playstore}
                          alt="playstore"
                          className="footer_playstore"
                        />
                        Google PlayStore
                      </button>
                    </a>

                    <button className="footer_style">
                      <img
                        src={images.applestoreapp}
                        alt="applestore"
                        className="footer_applestore"
                      />
                      App Store
                    </button>
                  </div>
                </div>
              </div>
              <div className="showhide_footercontent">
                <div className="_footer_col_media_to_follow">
                  <p className="_footer_spade_title">Follow Us On</p>

                  <div className="_follow_us_on_media_image_container">
                    {/* <img src={images?.facebook} alt="" />
                    <img src={images?.insta} alt="" />
                    <img src={images?.twitter} alt="" />
                    <img src={images?.telegram} alt="" /> */}
                    <img
                      src={images?.facebook}
                      alt="Facebook"
                      onClick={() =>
                        window.open("https://www.facebook.com/", "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={images?.insta}
                      alt="Instagram"
                      onClick={() =>
                        window.open("https://www.instagram.com/", "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={images?.twitter}
                      alt="Twitter"
                      onClick={() =>
                        window.open("https://twitter.com/", "_blank")
                      }
                      style={{ cursor: "pointer" }}
                    />
                    <img
                      src={images?.telegram}
                      alt="Telegram"
                      onClick={() => window.open("https://t.me/", "_blank")}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
              <p className="_footer_title_all">
                @All Rights Reserved - 2021 - 2025 |<span> Rocket Bet</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
