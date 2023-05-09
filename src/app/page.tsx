import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import React, { FC, Suspense } from 'react';
import { Banner } from '../components/Banner';
import { InfoCard } from '../components/InfoCard';
import ProjectList from '../components/projects/ProjectList';

const Home: FC<object> = () => {
    return (
        <main>
            <Header />
            <Banner />
            <InfoCard />
            <Suspense fallback={<div>Loading ...</div>}>
                <ProjectList />
            </Suspense>
            <Footer />
            <div>

            </div>
        </main>
    );
};

export default Home;
