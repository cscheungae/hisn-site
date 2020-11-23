import React from "react";
import Img from "gatsby-image";

import "./photoGrid.scss";

const PhotoGrid = ({ anniversaryCount, photos }) => {
  let anniversaryCountSuffix;
  let lastCharInAnniversaryCount = (anniversaryCount + "").slice(-1);
  switch (lastCharInAnniversaryCount) {
    case "1":
      anniversaryCountSuffix = "st";
      break;
    case "2":
      anniversaryCountSuffix = "nd";
      break;
    case "3":
      anniversaryCountSuffix = "rd";
      break;
    default:
      anniversaryCountSuffix = "th";
      break;
  }

  return (
    <div className="photo-grid-wrapper">
      <div className="photo-grid-section">
        <div className="photo-grid">
          <Img fluid={photos[0]["fluid"]} alt="photo1" className="photo1" />
          <Img fluid={photos[1]["fluid"]} alt="photo2" className="photo2" />
          <Img fluid={photos[2]["fluid"]} alt="photo3" className="photo3" />
        </div>
        <div className="blur">
          {anniversaryCount}
          <sub>{anniversaryCountSuffix}</sub>
        </div>
      </div>
    </div>
  );
};

export default PhotoGrid;
