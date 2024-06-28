import React from 'react';
import Hero from './Home/Hero';
import mission1 from "../assets/img12.jpg";

const AboutUs = () => {
    return (
        <div className="w-full">
            <Hero heading="About Seekh Foundation" subheading="Introduction to the foundation, its history, and mission" isButton={false} />
            <div className="p-4 mx-2 sm:mx-10 md:mx-20 my-6 bg-green-50 shadow-xl flex justify-center items-center flex-col lg:flex-row">
                <div className="flex-1 m-4 sm:px-5 md:px-10 py-2 sm:py-3 md:py-6">
                    <img src={mission1} alt='mission'></img>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-4 font-sans">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="text-lg text-gray-600">Buniyaad is dedicated to ensuring every child has access to quality education regardless of their
                        background. We provide school supplies, scholarships, and tutoring to support academic excellence.
                        Our holistic approach includes workshops on soft skills, mentoring, and extracurricular activities to
                        foster personal development, building confidence and communication skills. We assist community members
                        in obtaining essential documents like Aadhaar and PAN cards, simplifying bureaucratic hurdles. Engaging
                        the local community through awareness campaigns and workshops encourages active participation in
                        children's education. By spreading awareness of government schemes, we empower communities to access
                        essential services. Buniyaad strives to create a foundation where every child can thrive academically
                        and personally, contributing positively to their future and community.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
