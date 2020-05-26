import React from 'react';
import ProjectCard from './ProjectCard';

import Carousel from 'react-material-ui-carousel';

// CSS
import './Projects.css'

// Media
import portfolio from './Media/portfolioScreenshot.PNG';

const Projects = (props) => {
    
    let projects = [
        {
            imageAlt: "Ivan's Portfolio",
            image: portfolio,
            imageTitle: "Portfolio",
            projectTitle: 'Portfolio',
            projectDescription: "The site you're currently on. It was built from scratch without the use of a template.",
            labels: ['ReactJS', 'Material-UI', 'HTML5', 'CSS3', 'JavaScript']
        },
        {
            imageAlt: "Royale Calculator",
            image: portfolio,
            imageTitle: "Calculator",
            projectTitle: 'Royale Calculator',
            projectDescription: "Calculate the number of cards and gold required to finish your next upgrade in Super Cell's Clash Royale.",
            labels: ['ReactJS', 'HTML5', 'CSS3', 'JavaScript']
        }
    ]
    return (
        <div className='projectsFlex'>
            <h1 id='projects'>Projects</h1>

            <Carousel interval={7000}>
                {
                    projects.map(y => <ProjectCard value={y} />)
                }
            </Carousel>
            
        </div>
    );
}
export default Projects;