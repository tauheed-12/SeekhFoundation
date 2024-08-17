import React from 'react';
import imgbg from "../../assets/imgbg.png";
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center flex-wrap py-12 bg-slate-100" data-aos="fade-up">
            <div className='w-full md:w-2/3 flex flex-col lg:flex-row justify-center items-center flex-wrap '>
                <div className="flex-1 flex justify-end items-center p-8 md:p-0">
                    <img src={imgbg} alt='imgbg' />
                </div>
                <div className="flex-1 ml-8 font-poppins pr-4 md:pr-0">
                    <h1 className="text-2xl text-green-800 font-semibold mb-4">Transforming Lives
                        through Education and Empowerment</h1>
                    <p>
                        We are an NGO founded by a team of professional social workers. Our goal is
                        to harness education's power for the greater good. We envision a world where
                        kindness is abundant, education fuels positive change, and hope guides us all.
                    </p>
                    <p>
                        Join us in turning aspirations into action and making this vision a reality.
                        Together, we illuminate the path to a brighter future at SEEKH Foundation.
                    </p>
                    <p>
                        <Link to='/about'>
                            <button
                                className="bg-green-700 text-white px-4 py-[10px] rounded-lg mt-4">
                                Learn More
                            </button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
