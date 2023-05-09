import React from 'react';
import banner from 'public/images/c18.jpg';
import styles from './banner.module.scss';
import Image from 'next/image'

const Banner = () => (
  <div className={styles.StyledBanner}>
    <Image src={banner} alt='Banner' />
  </div>
);

export { Banner };