import React from 'react';
import { useEffect } from 'react';

import Hero from '../components/Hero';
import AboutSection from '../components/Home/AboutSection';
import Mission from '../components/Home/MissionSection';
import ObjectivesSection from '../components/Home/ObjectivesSection';
import DonateSection from '../components/Home/DonateSection';
import OurWorkSection from '../components/Home/OurWorkSection';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-full mt-1 sm:mt-2 flex flex-col items-center">
            <Hero heading="Be The Light Around You" subheading="Join us in making a difference 
            in the lives of those in need" isButton={true} />
            <Mission />
            <AboutSection />
            <ObjectivesSection />
            <DonateSection />
            <OurWorkSection />
        </div>
    );
};

export default Home;
