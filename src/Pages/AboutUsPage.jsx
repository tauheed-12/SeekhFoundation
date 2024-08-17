import React from 'react';
import Hero from '../components/Hero';
import mission1 from "../assets/img12.jpg";
import org1 from "../assets/org1.jpg";
import { useEffect } from 'react';
import vision from '../assets/vision.png';
import mission from '../assets/mission.png'

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className="w-full">
            <Hero heading="About Seekh Foundation" subheading="Introduction to the foundation, its history, and mission" isButton={false} />
            <div className="p-4 md:p-8 mx-2 sm:mx-10 md:mx-20 my-6 bg-slate-100 shadow-xl flex justify-center items-center flex-col xl:flex-row" data-aos="fade-up">
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
                    <div className="md:flex-1 flex flex-col md:flex-row  text-lg text-gray-600 font-poppins">
                        <div className='flex flex-col justify-start items-center px-6'>
                            <img src={vision} className='w-24 h-24' alt='vision' />
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-2xl font-semibold text-green-800'>Vision</h2>
                                <p>To create a world where all humans benefit from education, kindness
                                    pervades every spirit, hope illuminates every path and to cultivate an Empowered
                                    society of collective well-being.</p>
                            </div>
                        </div>
                        <div className='flex flex-col justify-start items-center md:border-solid md:border-l-[1px] md:border-black px-6 pt-4'>
                            <img src={mission} className='w-20 h-20' alt='mission' />
                            <div className='flex flex-col justify-center items-center'>
                                <h2 className='text-2xl font-semibold text-green-800'>Mission</h2>
                                <p>Through our initiative, we strive to promote education and ensure it is
                                    accessible to all. We aim to cultivate a culture of compassion, and contribute to build
                                    a society that supports Justice and the overall well-being of its people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center px-3 md:px-4 lg:px-6 py-4 md:py-10">
                <h2 className="text-3xl text-black font-semibold">Meet <span className="text-green-700">Our Teams</span></h2>
                <div className="flex flex-row justify-center items-center gap-4 flex-wrap mt-4">
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl" data-aos="fade-up">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Founder</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl" data-aos="fade-up">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Co-Founder</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl" data-aos="fade-up">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Marketing Head</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl" data-aos="fade-up">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Operation head</p>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-[300px] relative rounded-xl" data-aos="fade-up">
                        <img src={org1} alt='img1' />
                        <p className="absolute bottom-0 py-4 text-xl md:text-2xl font-poppins text-white bg-green-800 w-full text-center">Finance Head</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
