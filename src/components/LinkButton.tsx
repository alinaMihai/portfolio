import React, { FC } from 'react';
import styles from './link-button.module.scss';

interface Props {
    title: string;
    url: string;
    target: string;
}


const LinkButton: FC<Props> = ({ title, url, target }) => {
    return <a className={styles.StyledLinkButton} target={target} href={url} rel="noopener noreferrer">{title}</a>;
};

export { LinkButton };
