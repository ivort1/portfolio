import React from 'react';

// CSS
import './Projects.css'

import avatar from './avatar.png';
import github from './github.svg';

const Projects = () => {
    return (
        <div>
            <h1 id='projects'>Projects</h1>

            <div className='card'>
                <img id='image' src={avatar} alt="Avatar"/>
                <div class="container">
                    <h4 id='projectTitle'>Personal Portfolio</h4> 
                    <p id='projectDescription'>The site you're currently on! It was made from scratch with ReactJS and custom CSS (no libraries).</p>
                    <span className='label'>ReactJS</span> 
                    <span className='label'>HTML5</span> 
                    <span className='label'>CSS3</span> 
                    <span className='label'>JavaScript</span> 
                    <button className='githubButton'>
                        <a href='https://github.com/IvunOrtiz/portfolio' target='_blank' rel='noopener noreferrer'>
                            <img class='githubIcon' src={github} alt='github' />
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Projects;