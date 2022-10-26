import React from "react";

function Header() {
  return (
    <nav>
      <div className="logo-container">
        <img src='react-logo.png' alt='React logo' className="react-logo" />
        <p>ReactFacts</p>
      </div>
      <p className="header-text">React Course - Project 1</p>
    </nav>
  );
}

export default Header;
