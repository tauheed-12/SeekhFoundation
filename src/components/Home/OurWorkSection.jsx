import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import works from '../../Data/OurWorks';

const OurWorkSection = () => {
    return (
        <section 
            className="flex flex-col items-center gap-4 md:gap-6 my-10 px-4 sm:px-6 lg:px-12"
            data-aos="fade-up"
        >
            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                Our <span className="text-green-700 relative after:content-[''] after:block after:h-1 after:w-full after:bg-green-700 after:rounded-full after:mt-1">Works</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-600 font-poppins text-center max-w-xl">
                Check out our latest and completed projects — crafted with passion and precision.
            </p>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-4">
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

            {/* More details link */}
            <div className="mt-6">
                <Link 
                    to='/ourworks'
                    className="text-lg font-medium text-green-700 hover:text-green-900 hover:underline transition"
                >
                    View All Projects →
                </Link>
            </div>
        </section>
    );
};

export default OurWorkSection;
