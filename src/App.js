import React from 'react';

// Components
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

// CSS
import './App.css';

function App() {
  return (
    <div>
      <NavBar />

      <div className='container'>
        <div className='containerAboutMeFlex'>
          <AboutMe />
        </div>
        
        <div className='containerProjectFlex'>
          <Projects />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;