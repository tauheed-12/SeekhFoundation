import React from 'react';
import imgbg from "../../assets/imgbg.png";
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <section className="w-full py-16 bg-slate-50 font-poppins" data-aos="fade-up">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
                
                {/* Image */}
                <div className="flex-1 flex justify-center">
                    <img 
                        src={imgbg} 
                        alt="About SEEKH Foundation" 
                        className="w-full max-w-md rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                    />
                </div>

                {/* Text */}
                <div className="flex-1 text-gray-700">
                    <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 relative">
                        Transforming Lives through 
                        <span className="block">Education and Empowerment</span>
                        <span className="absolute left-0 bottom-0 w-20 h-1 bg-green-500 rounded-full"></span>
                    </h1>

                    <p className="mb-4 leading-relaxed text-lg">
                        We are an NGO founded by a team of professional social workers. Our goal is to 
                        harness education's power for the greater good. We envision a world where kindness 
                        is abundant, education fuels positive change, and hope guides us all.
                    </p>
                    
                    <p className="mb-6 leading-relaxed text-lg">
                        Join us in turning aspirations into action and making this vision a reality. Together, 
                        we illuminate the path to a brighter future at SEEKH Foundation.
                    </p>

                    <Link to='/about'>
                        <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
