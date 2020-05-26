import React from 'react';
import ProjectCard from './ProjectCard';

// CSS
import './Projects.css'

// Media
import portfolio from './Media/portfolioScreenshot.PNG';

const Projects = () => {
    
    let portfolioLabels = ['ReactJS', 'Material-UI', 'HTML5', 'CSS3', 'JavaScript'];
    
    return (
        <div className='projectsFlex'>
            <h1 id='projects'>Projects</h1>
            <ProjectCard
                imageAlt="Ivan's Portfolio"
                image={portfolio}
                imageTitle="Portfolio"
                projectTitle='Portfolio'
                projectDescription="The site you're currently on. It was built from scratch without the use of a template."
                techStackArray={portfolioLabels}
            />
        </div>
    );
}
export default Projects;