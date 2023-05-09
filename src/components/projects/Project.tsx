import React, { FC } from 'react';
import Image from 'next/image'
import { Tag } from '../Tag';
import { LinkButton } from '../LinkButton';
import styles from './project.module.scss';

export interface iProject {
    id: number;
    title: string;
    image: any;
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
        <div className={styles.StyledProject}>
            <div className={styles.header}>
                <span className={styles.title}>
                    <a href={item.site} title='see site' target='_blank'>
                        {item.title}
                    </a>
                </span>
                <span className={styles.subtitle}>{item.date}</span>
            </div>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <div className={styles.left}>
                        <Image src={item.image} alt={item.title} width={500} height={500} />
                    </div>
                    <div className={styles.right}>
                        <p>{item.description}</p>
                    </div>
                </div>
                <ul>
                    {item.technologies.map((technology, index) => (
                        <li key={index}>
                            <Tag value={technology} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.footer}>
                <div className={styles.buttons}>
                    <LinkButton title='View website' url={item.site} target='_blank' />
                    <LinkButton title='View repo' url={item.repository} target='_blank' />
                </div>
            </div>
        </div>
    );
};

export { Project };
