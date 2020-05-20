import React from 'react';
import Typewriter from 'typewriter-effect';

// CSS
import './AboutMe.css';

const AboutMe = () => {
      return(
        <div>
          <h1 id='ivan'>IVAN ORTIZ</h1>
          <p>My name is Ivan and I'm an aspiring software developer from Los Angeles, California <span role='img' aria-label='palm tree'>🌴</span></p>
      
          <Typewriter
            onInit={(typewriter) => {
              typewriter
              .typeString('I love to code 💻')
              .pauseFor(1000)
              .deleteChars(7)
              .typeString('watch sports 🏈')
              .pauseFor(1000)
              .deleteChars(15)
              .typeString('lift weights 🏋️‍♂️')
              .pauseFor(1000)
              .deleteChars(19)
              .typeString('eat tacos 🌮')
              .start()
            }}
          />

        </div>
      );
} 
export default AboutMe;