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
        </div>
        <div className={styles.right}>
            <div className={styles.description}>
                <p>Hi, welcome to my portfolio website!
                </p>
                <p>Here you can find an overview of my personal projects using a variety of technologies I've worked with over the years.
                </p>
                <p> Profesionally my primary focus has been on Frontend Technologies, I also have some good knowledge of Backend and DevOps.
                </p>
                <p>I have more than 5 years of working experience mostly as an IT Consultant for various companies and clients.
                </p><p>I am most experienced in <strong>Javascript</strong>, <strong>React</strong>, <strong>Nextjs</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>GraphQL</strong>, <strong>Storybook</strong>, <strong>React Testing Library</strong>, and <strong>Contentstack CMS</strong></p>
                <p>
                    When I am not learning new technologies and programming, some of the topics that interest me include Climate Change, Coaching, and Personal well-being.
                </p>
                <p>If you are interested in a collaboration, I'd love to get in touch!</p>
            </div>
        </div>
    </div>
};

export { InfoCard };
