import React from 'react';

import SocialMedia from '../Social Media/SocialMedia';

// CSS
import './AboutMe.css';

const AboutMe = () => {
  return(
    <div className='aboutMeFlex'>
      <h1 id='ivan'>IVAN ORTIZ</h1>
      <p id="aboutMe">My name is Ivan and I'm a software developer <br className="break"></br>from Los Angeles, California 🕶️☀️🌴</p>
      <SocialMedia />
    </div>
  );
} 
export default AboutMe;