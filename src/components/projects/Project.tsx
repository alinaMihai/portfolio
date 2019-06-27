import React, { FC } from 'react';
import styled from 'styled-components';
import { Tag } from '../Tag';
import { LinkButton } from '../LinkButton';

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

const StyledProject = styled.div`
    max-width: 400px;
    min-height: 339px;
    box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.25);
    .header,
    .content,
    .content .summary {
        display: flex;
        flex-direction: column;
    }
    .summary {
        margin-bottom: 12px;
        align-items: center;
    }
    @media (min-width: 768px) {
        .content .summary {
            flex-direction: row;
        }
    }
    img {
        display: block;
        max-width: 254px;
        max-height: 213px;
        width: auto;
        height: auto;
        margin-right: 20px;
    }

    .content .right {
        font-size: 12px;
        margin-right: 10px;
        text-align: center;
    }
    .header {
        display: flex;
        padding: 10px;
        background: blue;
        opacity: 0.55;
        color: wheat;
        border-top-left-radius: 19px;
    }
    .header .title {
        flex: 1;
    }
    .header .title a {
        text-decoration: none;
        color: white;
    }
    .header .subtitle {
        font-size: 10px;
    }

    .footer {
        padding: 10px;
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    }
    li {
        padding-left: 8px;
        margin-bottom: 6px;
    }
    .buttons {
        height: 40px;
        display: flex;
        align-items: center;
        border-top: 1px solid black;
        margin-top: 10px;
    }
    .buttons a {
        flex: 1;
    }
`;

const Project: FC<Props> = ({ item }) => {
    return (
        <StyledProject>
            <div className='header'>
                <span className='title'>
                    <a href={item.site} title='see site'>
                        {item.title}
                    </a>
                </span>
                <span className='subtitle'>{item.date}</span>
            </div>
            <div className='content'>
                <div className='summary'>
                    <div className='left'>
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className='right'>
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
            <div className='footer'>
                <div className='buttons'>
                    <LinkButton title='See website' url={item.site} />
                    <LinkButton title='See repo' url={item.repository} />
                </div>
            </div>
        </StyledProject>
    );
};

export { Project };
