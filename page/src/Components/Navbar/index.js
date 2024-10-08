import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav1">
        <img src="Logo.png" alt="Logo"></img>
        <p>
          <strong>LOGO</strong>
        </p>
        <img src="icons.png" alt="icons"></img>
      </div>
      <div className="nav2">
        <div>
          <strong>Shop</strong>
        </div>
        <div>
          <strong>Skills</strong>
        </div>
        <div>
          <strong>Stories</strong>
        </div>
        <div>
          <strong>About</strong>
        </div>
        <div>
          <strong>Contact us</strong>
        </div>
      </div>
    </>
  );
};

export default Navbar;
