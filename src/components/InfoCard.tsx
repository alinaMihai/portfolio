import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import me from '../assets/images/me.jpg';
import codewars from '../assets/images/codewars.png';

const StyledInfoCard = styled.div`
   border-bottom: 1px solid gray;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media (min-width: 768px) {
        flex-direction: row;
   }
   .left img {
        width: 200px;
        border-radius: 400px;
        margin-bottom: 30px;
   }
   .left, .summary, .right {
        display: flex;
        flex-direction: column;
   }
   .left {
        background: white;
        padding: 26px;
   }
   .title {
       font-size: 22px;
       font-weight: bold;
   }
   .subtitle {
      font-weight: bold;
      color: gray;
   }
   .links {
      align-items: center;
      display: flex;
      margin-top: 10px;
   }
   .links svg, .codeWars {
      font-size: 24px;
      padding: 9px;
      color: blue;
      opacity: 0.7;
   }
   .links svg:hover, .codeWars:hover {
       opacity: 1;
   }
   .codeWars {
       text-decoration: none;
       font-size: 14px;
   }
   .right {
       padding: 0 20px;
   }
   .description {
        font-size: 20px;
        color: black;
        padding: 10px;
   }
`;

const InfoCard = () => {
    return <StyledInfoCard>
        <div className='left'>
           <img src={me} alt='me'/>
           <div className='summary'>
              <span className='title'>Alina Mihai</span>
              <span className='subtitle'>Frontend Developer</span>
              <span className='subtitle'>London, United Kingdom</span>
           </div>
           <div className='links'>
            <a title="Twitter" href="http://twitter.com/alinaMihai19"><FontAwesomeIcon icon={faTwitter}/></a>
            <a title="LinkedIn" href="http://linkedin.com/in/alina-mihai-76b7b868/"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a title="Github" href="http://github.com/alinaMihai"><FontAwesomeIcon icon={faGithub}/></a>
            <a title="FreeCodeCamp" href="https://www.freecodecamp.org/alinamihai"><FontAwesomeIcon icon={faFreeCodeCamp}/></a>
           </div>
           <a className='codeWars' href="https://www.codewars.com/users/alinaMihai">Code Wars</a>
        </div>
        <div className='right'>
            <div className='description'>
                <p>Hi, I am Alina and my focus is on improving the quality of life through technology.</p>
                <p> On this website you can find some of the projects I've been working on over the past few years.</p>
                <p>Some of the technologies I am strong in: <strong>Javascript</strong>, <strong>Angular</strong>, <strong>AngularJS</strong>, <strong>React</strong>, <strong>React Native</strong>, <strong>HTML</strong>, <strong>CSS</strong></p>
            </div>            
        </div>
    </StyledInfoCard>
};

export {InfoCard};