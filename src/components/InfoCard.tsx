import React from 'react';
import styles from './info-card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons'
import me from 'public/images/me.jpg';
import Image from 'next/image'


const InfoCard = () => {
    return <div className={styles.StyledInfoCard}>
        <div className={styles.left}>
            <Image src={me} alt='me' width={200} />
            <div className={styles.summary}>
                <span className={styles.title}>Alina Mihai</span>
                <span className={styles.subtitle}>Frontend Developer</span>
                <span className={styles.subtitle}>Bucharest, Romania</span>
            </div>
            <div className={styles.links}>
                <a title="Twitter" target='_blank' rel="noopener noreferrer" href="http://twitter.com/alinaMihai19"><FontAwesomeIcon icon={faTwitter} /></a>
                <a title="LinkedIn" target='_blank' rel="noopener noreferrer" href="http://linkedin.com/in/alina-mihai-76b7b868/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a title="Github" target='_blank' rel="noopener noreferrer" href="http://github.com/alinaMihai"><FontAwesomeIcon icon={faGithub} /></a>
                <a title="FreeCodeCamp" target='_blank' rel="noopener noreferrer" href="https://www.freecodecamp.org/alinamihai"><FontAwesomeIcon icon={faFreeCodeCamp} /></a>
            </div>
            <a className={styles.codeWars} target='_blank' rel="noopener noreferrer" href="https://www.codewars.com/users/alinaMihai">Code Wars</a>
        </div>
        <div className={styles.right}>
            <div className={styles.description}>
                <p>Hi, I am Alina and my focus is on improving the quality of life through technology.</p>
                <p> On this website you can find some of the projects I've been working on over the past few years.</p>
                <p>Some of the technologies I am strong in: <strong>Javascript</strong>, <strong>React</strong>, <strong>Angular</strong>, <strong>AngularJS</strong> , <strong>React Native</strong>, <strong>HTML</strong>, <strong>CSS</strong></p>
            </div>
        </div>
    </div>
};

export { InfoCard };
