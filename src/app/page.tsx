import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { FC } from 'react';
import { Banner } from '../components/Banner';
import { InfoCard } from '../components/InfoCard';
import { ProjectList } from '../components/projects/ProjectList';

const Home: FC<object> = () => {
    return (
        <main>
            <Header />
            <Banner />
            <InfoCard />

            <ProjectList />
            <Footer />
            <div>

            </div>
        </main>
    );
};

export default Home;
