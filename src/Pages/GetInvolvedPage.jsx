import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import img1 from "../assets/img4.jpg";
import img3 from "../assets/banner.jpeg";
import '../css/Hero.css';

function GetInvolved() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero
                heading="Get Involved with Us"
                subheading="Be part of something impactful and meaningful."
                isButton={false}
            />

            {/* Volunteer Section */}
            <section className="py-12 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row items-center overflow-hidden mb-12 transform hover:shadow-2xl transition-all duration-300">
                
                {/* Image */}
                <div className="w-full md:w-[30%] overflow-hidden">
                <img
                    src={img1}
                    alt="Volunteers"
                    className="w-full h-full object-cover md:h-[24rem] transform hover:scale-110 transition-transform duration-500"
                />
                </div>

                {/* Text */}
                <div className="w-full md:w-[70%] p-6 sm:p-8 md:p-10 text-center md:text-left">
                    <h2 className="text-3xl font-extrabold text-green-600 mb-6">Volunteer with Us</h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Volunteering is not just an opportunity to give back—it's a chance to touch lives, forge new connections, and grow personally.
                        At SEEKH Foundation, we offer a variety of volunteer roles where your unique skills and passions can truly shine.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                        <li><strong className="text-gray-900">Make a Difference:</strong> Your efforts have the power to change lives and bring hope to those in need.</li>
                        <li><strong className="text-gray-900">Build Community:</strong> Join a network of compassionate individuals who share your dedication.</li>
                        <li><strong className="text-gray-900">Develop Skills:</strong> Learn and grow in areas like event planning, outreach, and more.</li>
                    </ul>
                    <Link 
                        to="https://forms.gle/sAjVd7jhaM2ihXeV6"
                        className="hero-cta inline-block"
                    >
                        Volunteer
                    </Link>
                </div>
            </div>
            </section>


            {/* Donate Section */}
            <section className="py-12 px-6 sm:px-12 md:px-20 bg-gradient-to-b from-gray-100 to-gray-50">
                <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row-reverse items-center overflow-hidden mb-12 transform hover:shadow-2xl transition-all duration-300">
                    
                    {/* Image */}
                    <div className="flex-1 overflow-hidden">
                        <img
                            src={img3}
                            alt="Donation Impact"
                            className="w-full h-full object-cover md:h-[24rem] transform hover:scale-110 transition-transform duration-500"
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-col w-[70%] sm:p-8 md:p-10 text-center md:text-left space-y-6">
                        <h2 className="text-3xl font-extrabold text-green-600">Donate</h2>
                        
                        <p className="text-gray-700 leading-relaxed">
                            Your donations make a significant impact on our community. At SEEKH Foundation, every contribution supports programs and initiatives that change lives.
                        </p>
                        
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li>
                                <strong className="text-gray-900">Support Those in Need:</strong> Provide essential resources to individuals and families.
                            </li>
                            <li>
                                <strong className="text-gray-900">Fund Programs:</strong> Sustain educational, health, and social programs.
                            </li>
                            <li>
                                <strong className="text-gray-900">Promote Growth:</strong> Invest in community development projects.
                            </li>
                        </ul>
                        
                        <Link 
                            to="/donate"
                            className="hero-cta inline-block"
                        >
                            Donate
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}

export default GetInvolved;
