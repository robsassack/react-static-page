import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src='./react-logo.png' alt='React logo' className="react-logo" />
        <p>ReactFacts</p>
      </div>
      <p className="header-text">React Course - Project 1</p>
    </header>
  );
}

export default Header;
