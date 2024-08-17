import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import works from '../../Data/OurWorks';



const OurWorkSection = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 my-6  py-3 sm:py-5 md:py-8" data-aos="fade-up">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row justify-center items-center gap-2"><span>Our</span><span className="text-green-700">Works</span></p>
            <h2 className="text-lg md:text-xl font-poppins w-10/12 md:w-2/3 lg:w-1/3 text-center">
                Check Out Our Latest and Completed Projects
            </h2>
            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 px-4 md:px-6 lg:px-8 py-3">
                {works.map((work, index) => (
                    <ProjectCard
                        key={index}
                        imgSrc={work.imgSrc}
                        tag={work.tag}
                        title={work.title}
                        description={work.description}
                        date={work.date}
                        author={work.author}
                    />
                ))}
            </div>
            <div className="flex justify-end w-full px-4 sm:px-6 md:px-8 lg:px-10 text-2xl text-red-900 underline">
                <Link to='/projects'>More Details</Link>
            </div>
        </div>
    );
}

export default OurWorkSection;
