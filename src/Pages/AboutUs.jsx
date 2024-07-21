import React from 'react';
import Hero from './Home/Hero';
import mission1 from "../assets/img12.jpg";
import org1 from "../assets/org1.jpg";
import { useEffect } from 'react';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-full">
            <Hero heading="About Seekh Foundation" subheading="Introduction to the foundation, its history, and mission" isButton={false} />
            <div className="p-4 mx-2 sm:mx-10 md:mx-20 my-6 bg-slate-100 shadow-xl flex justify-center items-center flex-col lg:flex-row">
                <div className="flex-1 m-4 sm:px-5 md:px-10 py-2 sm:py-3 md:py-6">
                    <img src={mission1} alt='mission'></img>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center gap-4 font-sans">
                    <h1 className="text-3xl font-bold">About Us</h1>
                    <p className="text-lg text-gray-600 font-poppins">Buniyaad is dedicated to ensuring every child has access to quality education regardless of their
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
            <div className="flex flex-col justify-center items-center px-3 md:px-4 lg:px-6 py-4 md:py-10">
                <h2 className="text-3xl text-black font-semibold">Meet <span className="text-green-700">Our Teams</span></h2>
                <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-4">
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Founder</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Co-Founder</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Marketing Head</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Operation head</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Finance Head</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
