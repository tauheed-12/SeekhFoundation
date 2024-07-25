import React from 'react';
import Hero from '../components/Hero';
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
                    <p className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row justify-center items-center gap-2"><span>About</span><span className="text-green-700">Us</span></p>
                    <p className="text-lg text-gray-600 font-poppins">We are an NGO founded by a team
                        of professional social workers. Our goal is to harness education's power for the greater
                        good. We envision a world where kindness is abundant, education fuels positive change,
                        and hope guides us all. Join us in turning aspirations into action and making this vision
                        a reality. Together, we illuminate the path to a brighter future at SEEKH Foundation.</p>
                    <div className="md:flex-1 text-lg text-gray-600 font-poppins">
                        <span className="text-xl font-black font-poppins mr-2">Vision:</span>To create a world where all humans benefit from education, kindness
                        pervades every spirit, hope illuminates every path and to cultivate an Empowered
                        society of collective well-being.
                        <p className="md:flex-1 text-lg text-gray-600 font-poppins">
                            <span className="text-xl font-black font-poppins mr-2">Mission:</span>Through our initiative, we strive to promote education and ensure it is
                            accessible to all. We aim to cultivate a culture of compassion, and contribute to build
                            a society that supports Justice and the overall well-being of its people.
                        </p>
                    </div>
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
