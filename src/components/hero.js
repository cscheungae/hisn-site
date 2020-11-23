import React from "react";
import BackgroundImage from "gatsby-background-image";

import { useBGImg } from "../hooks/useBGImg";

import "./hero.scss";

const Hero = () => {
  const bgImg = useBGImg();

  return (
    <BackgroundImage fluid={bgImg}>
      <div className="wrapper">
        <div className="container">
          <div className="notion">
            <div className="notion">
              <span className="subSlogan">
                <span
                  className="emoji eyes"
                  role="img"
                  aria-label="emoji of eyes"
                >
                  &#128064;
                </span>
                在看
              </span>
              <span className="subSlogan">
                <span
                  className="emoji heart"
                  role="img"
                  aria-label="emoji of heart"
                >
                  &#128151;
                </span>
                在聽
              </span>
            </div>
            <div className="divider"></div>
            <h1>聽障事，齊分享</h1>
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
