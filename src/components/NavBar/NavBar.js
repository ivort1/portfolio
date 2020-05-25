
import React from 'react';

// Media
import SunAndMoon from './SVG/sunAndMoon.svg';

// CSS
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbarFlex'>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>

          <img id='sunAndMoon' src={SunAndMoon} alt='SunAndMoon' /> 
        </div>
    )
}
export default NavBar;