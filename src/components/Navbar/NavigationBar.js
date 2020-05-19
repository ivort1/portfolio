
import React from 'react';
import Github from './SVGs/github.svg';
import LinkedIn from './SVGs/linkedin.svg';
import Resume from './SVGs/resume.svg';
import Email from './SVGs/email.svg';
import pdf from './pdfExample.pdf';
import SunAndMoon from './SVGs/sunAndMoon.svg';


const NavigationBar = () => {
    return (
        <div>
          <nav>
              <h1 id='ivan'>IVAN ORTIZ</h1>
              <a href='https://github.com/IvunOrtiz' target='_blank' rel='noopener noreferrer'>
                      <img class='zoomEffect' src={Github} alt='Github' />
              </a>

              <a href='https://www.linkedin.com/in/ivanortiz93' target='_blank' rel='noopener noreferrer'>
                  <img class='zoomEffect' src={LinkedIn} alt='LinkedIn' />
              </a>

              <a href={pdf} target='_blank' rel='noopener noreferrer' download>
                  <img class='zoomEffect' src={Resume} alt='Resume' />
              </a>

              <a href='mailto:ortiz.ivan93@gmail.com' target='_blank' rel='noopener noreferrer'>
                  <img class='zoomEffect' src={Email} alt='Email' />
              </a>

              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>

              <img id='sunAndMoon' src={SunAndMoon} alt='SunAndMoon' /> 
          </nav>
        </div>
    )
}
export default NavigationBar;