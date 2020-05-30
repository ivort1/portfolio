
import React from 'react';
import ToggleSwitch from './ToggleSwitch';

// Media
import SunAndMoon from './SVG/sun-black.svg';

// CSS
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbarFlex'>
          <ToggleSwitch />

          <img id='sunAndMoon' src={SunAndMoon} alt='SunAndMoon' /> 
        </div>
    )
}
export default NavBar;