import React from 'react';
import styled from 'styled-components';
import { Project, iProject } from './Project';
import {projects} from '../../assets/data/projects';

const StyledProjectList = styled.div`
    padding: 26px;
    ul {
        padding: 0;
        list-style: none;
    }
`;

const ProjectList = () => {
    function getListOfProjectPerYear(year:string, yearProjects: iProject[]) {
        return (
            <div key={year}>
                <h4>Year: {year}</h4>
                <ul key={year}>
                {yearProjects.map(project => <li key={project.id}><Project  item={project}/></li>)}            
                    </ul>        
            </div>
        )
    }
    return <StyledProjectList>
        <h1>List of Projects</h1>
        {projects.map(yearProjects => getListOfProjectPerYear(yearProjects.year, yearProjects.projects))}
    </StyledProjectList>
};

export {ProjectList};