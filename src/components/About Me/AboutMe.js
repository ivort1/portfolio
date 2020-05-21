import React from 'react';
import Typewriter from 'typewriter-effect';

// CSS
import './AboutMe.css';

const AboutMe = () => {
  return(
    <div>
      <h1 id='ivan'>IVAN ORTIZ</h1>
      <p id="aboutMe">My name is Ivan and I'm a software developer <br></br>from Los Angeles, California.</p>
      
      {/* <p> 
        I love to code 💻
        <br></br>watch sports 🏈
        <br></br>lift weights 🏋️‍♂️
        <br></br>and eat tacos 🌮
      </p> 
  
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

      */}

    </div>
  );
} 
export default AboutMe;