import React from 'react';
import ProjectCard from './ProjectCard';

// CSS
import './Projects.css'

const Projects = () => {
    return (
        <div className='projectsFlex'>
            <h1 id='projects'>Projects</h1>
            <ProjectCard />
        </div>
    );
}
export default Projects;