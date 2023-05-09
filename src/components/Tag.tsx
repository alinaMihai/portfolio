import React, { FC } from 'react';
import styles from './tag.module.scss';

interface Props {
    value: string;
}


const Tag: FC<Props> = ({ value }) => {
    return <span className={styles.StyledTag}>{value}</span>;
};
export { Tag };
