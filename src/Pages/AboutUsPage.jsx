import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import mission1 from "../assets/img12.jpg";
import tauheed from "../assets/tauheed.jpg";
import vision from '../assets/vision.png';
import mission from '../assets/mission.png';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full bg-gray-50">
            {/* Hero Section */}
            <Hero 
                heading="About Seekh Foundation" 
                subheading="Introduction to the foundation, its history, and mission" 
                isButton={false} 
            />

            {/* About Section */}
            <section 
                className="p-6 md:p-12 mx-2 sm:mx-10 md:mx-20 my-10 bg-white rounded-2xl shadow-lg flex flex-col xl:flex-row gap-8" 
                data-aos="fade-up"
            >
                <div className="flex-1 flex justify-center items-center overflow-hidden rounded-xl">
                    <img 
                        src={mission1} 
                        alt="Our Mission" 
                        className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                    />
                </div>

                <div className="flex-1 flex flex-col gap-6 font-sans">
                    <h2 className="text-3xl lg:text-4xl font-bold flex items-center gap-2">
                        <span>About</span>
                        <span className="text-green-700">Us</span>
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed">
                        We are an NGO founded by a team of professional social workers. Our goal is to harness the power 
                        of education for the greater good. We envision a world where kindness is abundant, education fuels 
                        positive change, and hope guides us all. Join us in turning aspirations into action and making this 
                        vision a reality. Together, we illuminate the path to a brighter future at SEEKH Foundation.
                    </p>

                    {/* Vision & Mission */}
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <img src={vision} className="w-20 h-20 mb-4" alt="Vision" />
                            <h3 className="text-2xl font-semibold text-green-800 mb-2">Vision</h3>
                            <p className="text-gray-600">
                                To create a world where all humans benefit from education, kindness pervades every spirit, 
                                hope illuminates every path, and an empowered society thrives in collective well-being.
                            </p>
                        </div>
                        
                        <div className="flex flex-col items-center text-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <img src={mission} className="w-20 h-20 mb-4" alt="Mission" />
                            <h3 className="text-2xl font-semibold text-green-800 mb-2">Mission</h3>
                            <p className="text-gray-600">
                                We strive to promote education and ensure it is accessible to all. We aim to cultivate compassion, 
                                and contribute to building a society that supports justice and the overall well-being of its people.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="text-center py-12 px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Meet <span className="text-green-700">Our Team</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {["Founder", "Co-Founder", "Marketing Head", "Operation Head", "Finance Head"].map((role, index) => (
                        <div 
                            key={index} 
                            className="relative max-w-[260px] overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 group" 
                            data-aos="fade-up"
                        >
                            <img 
                                src={tauheed} 
                                alt={role} 
                                className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                            <p className="absolute bottom-0 w-full py-3 text-lg font-semibold text-white bg-green-800 bg-opacity-90">
                                {role}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
