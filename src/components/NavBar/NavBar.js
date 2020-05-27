
import React from 'react';

// Media
import SunAndMoon from './SVG/sunAndMoon.svg';

// CSS
// import './NavBar.css';
import './NavBar_DarkMode.css';

const NavBar = () => {
    return (
        <div className='navbarFlex'>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>

          <img id='sunAndMoon' src={SunAndMoon} alt='SunAndMoon' /> 
        </div>
    )
}
export default NavBar;