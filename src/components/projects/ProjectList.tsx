import React from 'react';
import { Project, iProject } from './Project';
import { projects } from '../../../public/assets/data/projects';
import styles from './project-list.module.scss';


const ProjectList = () => {
    function getListOfProjectPerYear(year: string, yearProjects: iProject[]) {
        return (
            <div key={year}>
                <h4>Year: {year}</h4>
                <ul className={styles.yearList} key={year}>
                    {yearProjects.map((project) => (
                        <li className={styles.yearProject} key={project.id}>
                            <Project item={project} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return (
        <div className={styles.StyledProjectList}>
            <h1>List of Projects</h1>
            {projects.map((yearProjects) => getListOfProjectPerYear(yearProjects.year, yearProjects.projects))}
        </div>
    );
};

export { ProjectList };
