import React from 'react';
import { Project, iProject } from './Project';
import groupby from 'lodash-es/groupBy';
import styles from './project-list.module.scss';
import { getAllProjects } from '@/utils/contentful';


const ProjectList = async () => {
    const projects = await getAllProjects();

    function getListOfProjectPerYear(projects: iProject[]) {
        const projectsByYear = groupby(projects, 'year');
        return Object.entries(projectsByYear).sort(([year1,], [year2,]) => {
            return Number(year2) - Number(year1);
        }).map(([year, listProjects]) => {
            return (
                <section key={year}>
                    <h4>Year: {year}</h4>
                    <ul className={styles.yearList} key={year}>
                        {listProjects.map((project) => (
                            <Project item={project} key={project.title} />
                        ))}
                    </ul>
                </section>
            )
        })
    }
    return (
        <div className={styles.StyledProjectList}>
            <h1>List of Projects</h1>
            {getListOfProjectPerYear(projects)}
        </div>
    );
};

export default ProjectList;
