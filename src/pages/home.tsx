import React, { FC } from 'react';
import { Banner } from '../components/Banner';
import { InfoCard } from '../components/InfoCard';
import { ProjectList } from '../components/projects/ProjectList';

const Home: FC<object> = () => {
    return (
        <div>
            <Banner />
            <InfoCard />

            <ProjectList />
        </div>
    );
};

export { Home };
