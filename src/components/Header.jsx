import React from "react";

function Header(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className='nav--logo-container'>
        <img src='react-logo.png' alt='React logo' className='nav--logo-icon' />
        <p>ReactFacts</p>
      </div>
      <div className='toggler'>
        <p className='toggler--light'>Light</p>
        <div className='toggler--slider' onClick={props.toggleDarkMode}>
          <div className='toggler--slider--circle'></div>
        </div>
        <p className='toggler--dark'>Dark</p>
      </div>
    </nav>
  );
}

export default Header;
