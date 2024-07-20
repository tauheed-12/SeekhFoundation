import React from 'react';
import { MdOutlineDateRange, MdGroups2 } from "react-icons/md";

const ProjectCard = ({ imgSrc, tag, title, description, date, author }) => {
    return (
        <div className="flex flex-col bg-white rounded-lg p-2 md:p-3 lg:p-4 max-w-full lg:max-w-[500px]">
            <div className="lg:flex-1 flex justify-center items-center overflow-hidden">
                <img src={imgSrc} alt={title} className="object-cover" />
            </div>
            <div className="lg:flex-1 flex flex-col gap-2 p-4">
                <div className="flex flex-col gap-2">
                    <p className="text-green-800 italic font-semibold">#{tag}</p>
                    <h3 className=" text-xl md:text-2xl font-semibold">{title}</h3>
                    <p className="text-gray-600 font-semibold">{description}</p>
                </div>
                <hr />
                <div className="flex flex-row items-center justify-center">
                    <p className="flex flex-row items-center mr-3 text-md md:text-lg font-semibold">
                        <MdOutlineDateRange className="mr-2" /> {date}
                    </p>
                    <div className="border-l-black border-solid border-l-2 h-4 mx-4"></div>
                    <p className="flex flex-row items-center md:text-lg font-semibold">
                        <MdGroups2 className="mr-2" /> {author}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
