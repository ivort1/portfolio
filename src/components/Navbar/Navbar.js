
import React from 'react';
import Github from './github.svg';
import LinkedIn from './linkedin.svg';

const Navbar = () => {
    return (
        <div>
            <nav>
                <a className='zoom' href='https://github.com/IvunOrtiz' target='_blank' rel='noopener noreferrer'> <img src={Github} alt='Github' /> </a>
                <a href='https://www.linkedin.com/in/ivanortiz93' target='_blank' rel='noopener noreferrer'> <img src={LinkedIn} alt='LinkedIn' /> </a>
            </nav>
        </div>
    )
}
export default Navbar;