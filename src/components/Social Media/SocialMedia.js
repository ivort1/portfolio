
import React from 'react';

// CSS 
import './SocialMedia.css';

// Media 
import Github from './SVG/github.svg';
import LinkedIn from './SVG/linkedin.svg';
import Resume from './SVG/resume.png';
import Email from './SVG/email.png';
import pdf from './pdfExample.pdf';

const SocialMedia = () => {
    return (
        <div className='socialMediaFlex'>
            <a className='float' href='https://github.com/IvunOrtiz' target='_blank' rel='noopener noreferrer'>
                <img className='zoomEffect' src={Github} alt='Github' />
            </a>

            <a className='float' href='https://www.linkedin.com/in/ivanortiz93' target='_blank' rel='noopener noreferrer'>
                <img className='zoomEffect' src={LinkedIn} alt='LinkedIn' />
            </a>

            <a className='float' href={pdf} target='_blank' rel='noopener noreferrer' download>
                <img className='zoomEffect' src={Resume} alt='Resume' />
            </a>

            <a className='float' href='mailto:ortiz.ivan93@gmail.com' target='_blank' rel='noopener noreferrer'>
                <img className='zoomEffect' src={Email} alt='Email' />
            </a>
        </div>
    )
}
export default SocialMedia;