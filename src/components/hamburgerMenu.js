import React, { useState } from "react";
import $ from "jquery";

import "./hamburgerMenu.scss";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log("handleClick is triggered.");
    if (open === true) $(".mobileNav").slideUp();
    else $(".mobileNav").slideDown();
    setOpen(!open);
  };

  return (
    <button
      className={"hamburgerMenu" + (open ? " open" : "")}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className="bar"></div>
    </button>
  );
};

export default HamburgerMenu;
