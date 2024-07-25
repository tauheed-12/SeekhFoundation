import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Objectives from '../components/Objectives';
import Mission from '../components/Mission';
import OurWork from '../components/OurWork';
import Donate from '../components/Donate';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-full mt-1 sm:mt-2 flex flex-col items-center">
            <Hero heading="Be The Light Around You" subheading="Join us in making a difference in the lives of those in need" isButton={true} />
            <Mission />
            <About />
            <div>
                <Objectives />
            </div>
            <Donate />
            <OurWork />
        </div>
    );
};

export default Home;
