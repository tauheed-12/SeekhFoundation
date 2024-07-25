import React from 'react';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';



const OurWork = () => {
    const projects = [
        {
            imgSrc: img1,
            tag: 'Health',
            title: 'Organised Eye checkup camp in the resources centre for the Slum people.',
            description: 'Organizing such a camp can significantly impact the community by detecting...',
            date: '26/01/2021',
            author: 'Admin'
        },
        {
            imgSrc: img2,
            tag: 'Health',
            title: 'Conduct Session on menstrual hygiene and health.',
            description: 'Conducted Session on menstrual hygiene and health with women of urban slums and...',
            date: '14/02/2021',
            author: 'Admin'
        },
        {
            imgSrc: img3,
            tag: 'Eduaction',
            title: 'Educational Visit to Jamia Millia Islamia College',
            description: 'Organized an educational visit for slum children to Jamia Millia Islamia College to...',
            date: '05/03/2021',
            author: 'Admin'
        }
    ];

    return (
        <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 my-6 bg-slate-100 py-3 sm:py-5 md:py-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row justify-center items-center gap-2"><span>Our</span><span className="text-green-700">Events</span></p>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-700 font-poppins w-10/12 md:w-2/3 lg:w-1/3 text-center">
                Check Out Our Latest and Completed Projects
            </h2>
            <div className="flex flex-row flex-wrap lg:flex-nowrap gap-4 px-4 md:px-6 lg:px-8 py-3">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imgSrc={project.imgSrc}
                        tag={project.tag}
                        title={project.title}
                        description={project.description}
                        date={project.date}
                        author={project.author}
                    />
                ))}
            </div>
            <div className="flex justify-end w-full px-4 sm:px-6 md:px-8 lg:px-10 text-2xl text-red-900 underline">
                <Link to='/projects'>More Details</Link>
            </div>
        </div>
    );
}

export default OurWork;
