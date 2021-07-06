import * as React from "react"
import { Helmet } from "react-helmet";

import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

import Button from '../components/Button';
import Card from '../components/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const IndexPage = () => {

  const envelope = <FontAwesomeIcon icon={faEnvelope} />
  const instagram = <FontAwesomeIcon icon={faInstagram} />
  const github = <FontAwesomeIcon icon={faGithub} />
  const linkedIn = <FontAwesomeIcon icon={faLinkedinIn} />
  
  return (
    <main>
      <Helmet>
          <title>Ivan Ortiz | My portfolio</title>
          <link rel="apple-touch-icon" sizes="180x180" href="/icon.png"></link>
          <meta name="apple-mobile-web-app-title" content="Ivan Ortiz"></meta>
          <meta name="application-name" content="Ivan Ortiz"></meta>
      </Helmet>

      <div className="container">
        <div className="head">
          <div className="header">Ivan Ortiz</div>
        </div>
       
        <div class="myButtonsContainer">
          <Button
            href="/Resume.pdf"
            buttonIcon="bi-file-earmark-text-fill"
            buttonType="btn-dark"
            buttonText="My resume" />

          <Button 
            href="mailto:ortiz.ivan93@gmail.com"
            buttonIcon="bi-envelope-fill"
            buttonType="btn-outline-dark"
            buttonText="Email me" />

          <Button
            href="https://github.com/ivort1"
            buttonIcon="bi-github"
            buttonType="btn-outline-dark"
            buttonText="GitHub" />

          <Button
            href="https://www.linkedin.com/in/ivanortiz93"
            buttonIcon="bi-linkedin"
            buttonType="btn-outline-dark"
            buttonText="LinkedIn" />
        </div>
        
        <div className="aboutMeContainer">
          <div className="header">About me</div>
          <p className="bodyText">
            Sports enthusiast, lover of tacos, pizza, and In-N-Out, recovering Disneyland addict, and huge nerd for all things
            related to tech and software.
          </p>
        </div>

        <div className="myProjectsContainer">
          <div className="header">My projects</div>
          <div className="myProjects">
            <Card
              cardTitle="Personal portfolio"
              cardSubtitle={["Gatsby", "HTML", "CSS", "Sass", "JavaScript", "GitHub", "Netlify", "Google Domains"]}
              cardText="The site you're currently viewing! This website allows me to conveniently display a little bit about me, my contact information, my thoughts, and my projects."
              cardGitHubLink="https://github.com/ivort1/portfolio"
              cardWebsiteLink="https://www.ivanortiz.me" />

            <Card
              cardTitle="Destination wedding website"
              cardSubtitle="Built with HTML, CSS, JavaScript, and Bootstrap, stored on GitHub, and hosted on Netlify with a custom domain."
              cardText="We decided on having a destination wedding and thought that having a website would make it a lot easier for our guests to find all relevant information pertaining to the wedding."
              cardGitHubLink="https://github.com/ivort1/bodaenmexico"
              cardWebsiteLink="https://www.ivanandmarilynn.com" />

            <Card
              cardTitle="Royale calculator"
              cardSubtitle={["React", "HTML", "CSS", "JavaScript", "Material-UI", "GitHub", "Netlify"]}
              cardText="A calculator for the hit mobile game, Clash Royale, that evaluates the quantity of cards and amount of gold that is still required to max out a card to level thirteen."
              cardGitHubLink="https://github.com/ivort1/royale-calculator"
              cardWebsiteLink="https://royalecalculator.netlify.app/" />
          </div>
        </div>

        <footer>
          <div className="footerIcons">
            <span className="fa-lg"><a href="mailto: ortiz.ivan93@gmail.com">{envelope}</a></span>
            <span className="fa-lg"><a href="https://www.github.com/ivort1" target="_blank" rel="noopener noreferrer">{github}</a></span>
            <span className="fa-lg"><a href="https://www.instagram.com/ivunortiz/" target="_blank" rel="noopener noreferrer">{instagram}</a></span>
            <span className="fa-lg"><a href="https://www.linkedin.com/in/ivanortiz93" target="_blank" rel="noopener noreferrer">{linkedIn}</a></span>
          </div>
          <span>© Ivan Ortiz 2021</span>
        </footer>

      </div>{/* container */}
    </main>
  )
}

export default IndexPage