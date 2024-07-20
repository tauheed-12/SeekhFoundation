import React from 'react';
import './About.css';
import imgbg from "../../assets/imgbg.png";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="w-full md:w-2/3 flex flex-col lg:flex-row justify-center items-center flex-wrap py-12">
            <div className="flex-1 flex justify-end items-center p-2 md:p-0">
                <img src={imgbg} alt='imgbg' />
            </div>
            <div className="flex-1 ml-8 font-poppins pr-4 md:pr-0">
                <h1 className="text-2xl text-red-800 font-semibold mb-4">Transforming Lives through Education and Empowerment</h1>
                <p>
                    Project Buniyaad is dedicated to transforming the lives of the Batla House Juggi community by addressing their most pressing needs. Our mission is to provide access to quality education, ensuring that every child in the community has the opportunity to learn and grow in a supportive environment.
                </p>
                <p>
                    In addition to education, Project Buniyaad assists community members in obtaining essential documents, such as birth certificates, Aadhar cards, and ration cards, which are crucial for accessing various government services and benefits.
                </p>
                <p>
                    <Link to='/about'>
                        <button className="bg-red-800 text-white px-4 py-[10px] rounded-lg mt-4">
                            Learn More
                        </button>
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default About;
