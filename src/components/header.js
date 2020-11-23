import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import HamburgerMenu from "./hamburgerMenu";

import { useHisnLogo } from "../hooks/useHisnLogo";

// Loads the styles tailored for this page
import "./header.scss";
import "../styles/container.scss";

const Navigation = ({ className }) => (
  <nav className={className}>
    <ul>
      <Link to="/">
        <li>首頁</li>
      </Link>
      <Link to="#aboutUs">
        <li>認識我們</li>
      </Link>
      <Link to="/#memberPanel">
        <li>幹事成員</li>
      </Link>
      <Link to="/#activity">
        <li>活動</li>
      </Link>
      <Link to="/anniversary">
        <li>周年專頁</li>
      </Link>
      <Link to="/videos">
        <li>影片</li>
      </Link>
      <Link to="/#joinUs">
        <li>成為會員</li>
      </Link>
    </ul>
  </nav>
);

const Header = () => {
  const hisnLogo = useHisnLogo();

  return (
    <div className="header">
      <div className="container">
        <div className="logoBar">
          <Link to="/">
            <Img className="logo" fixed={hisnLogo} />
          </Link>
          <HamburgerMenu className="hamburgerMenu" />
          <Navigation className="desktopNav" />
        </div>
      </div>
      <Navigation className="mobileNav" />
    </div>
  );
};

export default Header;
