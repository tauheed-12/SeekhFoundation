import React from 'react';
import Hero from './Home/Hero';
import About from './Home/About';
import Objectives from './Home/Objectives';
import Mission from './Home/Mission';
import OurWork from './Home/OurWork';

const Home = () => {
    return (
        <div className="w-full mt-1 sm:mt-2 flex flex-col items-center">
            <Hero heading="Empowering the Batla House Juggi Community" subheading="Join us in making a difference in the lives of those in need" isButton={true} />
            <Mission />
            <About />
            <div>
                <Objectives />
            </div>
            <OurWork />
        </div>
    );
};

export default Home;
