import React from 'react';
import { MdOutlineDateRange, MdGroups2 } from "react-icons/md";

const ProjectCard = ({ imgSrc, tag, title, description, date, author }) => {
    return (
        <div className="group flex flex-col md:flex-row lg:flex-col bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 max-w-full lg:max-w-[500px]">
            
            {/* Image Section */}
            <div className="flex-1 overflow-hidden">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col gap-3 p-5">
                
                {/* Tag */}
                <span className="text-green-700 text-sm font-semibold uppercase tracking-wide">
                    #{tag}
                </span>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                    {title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {description}
                </p>

                <div className="mt-auto pt-3 border-t border-gray-200 flex items-center justify-center md:justify-start text-gray-700 text-sm md:text-base">
                    <p className="flex items-center !mr-2">
                        <MdOutlineDateRange className="mr-2 text-green-700" /> {date}
                    </p>
                    <div className="border-l border-gray-300 h-5 mx-3"></div>
                    <p className="flex items-center !ml-2">
                        <MdGroups2 className="mr-2 text-green-700" /> {author}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
