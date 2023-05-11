import React, { FC } from 'react';
import Image from 'next/image'
import { Tag } from '../Tag';
import { LinkButton } from '../LinkButton';
import styles from './project.module.scss';

export interface iProject {
    title: string;
    image: {
        url: string;

    };
    description: string;
    site: string;
    repository: string;
    technologies: string[];
    date: string;
}

interface Props {
    item: iProject;
}


const Project: FC<Props> = ({ item }) => {
    return (
        <li className={styles.StyledProject}>
            <div className={styles.header}>
                <span className={styles.title}>
                    <a href={item.site} title='see site' target='_blank'>
                        {item.title}
                    </a>
                </span>
            </div>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <p>{item.description}</p>
                </div>
                <ul className={styles.technologies}>
                    {item.technologies.map((technology, index) => (
                        <li key={index}>
                            <Tag value={technology} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer}>
                <div className={styles.buttons}>
                    <LinkButton title='View repo' url={item.repository} target='_blank' />
                </div>
            </div>
        </li>
    );
};

export { Project };
