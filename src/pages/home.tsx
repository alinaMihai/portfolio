import React, {FC} from 'react';
import { Banner } from '../components/Banner';
import { InfoCard } from '../components/InfoCard';
import { ContentCard } from '../components/ContentCard';
import { ProjectList } from '../components/projects/ProjectList';

const Home:FC<object> = () => {
    return <div>
        <Banner/>
        <InfoCard/>
        <ContentCard>
            <ProjectList/>
        </ContentCard>
    </div>
};

export {Home};