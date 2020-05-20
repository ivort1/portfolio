import React from 'react';

// Components
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/About Me/AboutMe';
import SocialMedia from './components/Social Media/SocialMedia';
import Projects from './components/Projects/Projects';

// CSS
import './App.css';

function App() {
  return (
    <div class='parent'>
      <NavBar />
      <AboutMe />
      <SocialMedia />
      <Projects />
    </div>
  );
}

export default App;
