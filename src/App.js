import React, {Component} from 'react';

// Components
import NavBar from './components/NavBar/NavBar';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

// CSS
import './App.css';
import './LightMode.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
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
}
export default App;