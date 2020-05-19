import React from 'react';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Typewriter from 'typewriter-effect';
import Programmer from './programmer.svg'

const Main = () => {
    // const notebook = <span role='img' aria-label='notebook'>💻</span>
    return (
        <main>
            <AboutMe />
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString(`I love to code ${<img src={Programmer} alt=''/>}`)
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
            <Projects />
            
        </main>
    );
}
export default Main;