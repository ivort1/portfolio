import React from 'react';

// Components
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import SocialMedia from './components/Social Media/SocialMedia';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

// CSS
import './App.css';

function App() {
  return (
    <main>

      <header className='navbar'>
        <NavBar />
      </header>

      <div className='row'>
        <section className='aboutMe'>
          <AboutMe />
          <SocialMedia />
        </section>
  
        <section className='projects'>
          <Projects />
        </section>
      </div>

      <footer className='footer'>
        <Footer />
      </footer>
      
    </main>
  );
}

export default App;