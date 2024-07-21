import React from 'react';
import Hero from './Home/Hero';
import About from './Home/About';
import Objectives from './Home/Objectives';
import Mission from './Home/Mission';
import OurWork from './Home/OurWork';
import Donate from './Home/Donate';
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
