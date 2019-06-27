import React from 'react';
import styled from 'styled-components';
import { Project, iProject } from './Project';
import { projects } from '../../assets/data/projects';

const StyledProjectList = styled.div`
    padding: 26px;
    .yearList {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .yearProject:not(:last-child) {
        margin-bottom: 60px;
    }

    @media (min-width: 1024px) {
        .yearProject:not(:last-child) {
            margin-right: 60px;
            margin-bottom: 10px;
        }
        .yearList {
            flex-direction: row;
        }
    }
`;

const ProjectList = () => {
    function getListOfProjectPerYear(year: string, yearProjects: iProject[]) {
        return (
            <div key={year}>
                <h4>Year: {year}</h4>
                <ul className='yearList' key={year}>
                    {yearProjects.map((project) => (
                        <li className='yearProject' key={project.id}>
                            <Project item={project} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return (
        <StyledProjectList>
            <h1>List of Projects</h1>
            {projects.map((yearProjects) => getListOfProjectPerYear(yearProjects.year, yearProjects.projects))}
        </StyledProjectList>
    );
};

export { ProjectList };
