import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "./contacts.scss";

import { useDeafImg } from "../hooks/useDeafImg.js";
import { useHisnLogo } from "../hooks/useHisnLogo";

// Loads assests for this page
import FBIcon from "../images/svg/facebook-24px.svg";
import PhoneIcon from "../images/svg/phone-24dp.svg";
import FaxIcon from "../images/svg/fax-24px.svg";
import EmailIcon from "../images/svg/email-24px.svg";

const Contacts = () => {
  const deafImg = useDeafImg();
  const hisnLogo = useHisnLogo();

  return (
    <div className="contacts">
      <div className="container">
        <div className="flexWrap">
          <div className="contactsInfo">
            <h1>聯絡我們</h1>
            <div className="info">
              <span className="icon">
                <FBIcon />
              </span>
              <span className="key">Facebook</span>
              <span className="value">
                <a
                  href="https://facebook.com/HISNfanpage"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hisn Hksd
                </a>
              </span>
            </div>
            <div className="info">
              <span className="icon">
                <PhoneIcon />
              </span>
              <span className="key">電話</span>
              <span className="value">
                <a href="tel:27111974">27111974</a>
              </span>
            </div>
            <div className="info">
              <span className="icon">
                <FaxIcon />
              </span>
              <span className="key">傳真</span>
              <span className="value">
                <a href="tel:27614390">27614390</a>
              </span>
            </div>
            <div className="info">
              <span className="icon">
                <EmailIcon />
              </span>
              <span className="key">電郵</span>
              <span className="value">
                <a href="mailto:hisn@deaf.org.hk">hisn@deaf.org.hk</a>
              </span>
            </div>
          </div>
          <div className="logoCol">
            <a href="https://www.deaf.org.hk" target="_blank" rel="noreferrer">
              <Img fixed={deafImg} />
            </a>
            <Link to="/">
              <Img fixed={hisnLogo} />
            </Link>
          </div>
        </div>
        <p>Copyright @ 2020 The Hong Kong Society for the Deaf</p>
      </div>
    </div>
  );
};

export default Contacts;
