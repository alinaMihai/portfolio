import React from 'react';
import styles from './footer.module.scss';



const Footer = () => (
    <div className={styles.StyledFooter}><span>{new Date().getUTCFullYear()} © Alina Mihai Personal Portfolio</span></div >
);

export { Footer };