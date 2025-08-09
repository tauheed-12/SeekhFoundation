import React from 'react';
import { ObjectArray } from '../../Data/Objective';
import eductionImg from '../../assets/education.jpeg';
import communityImg from '../../assets/Community.jpeg';
import documentImg from '../../assets/document.png';
import personalImg from '../../assets/personalDev.jpeg';
import spreadImg from '../../assets/spread.jpg';

const imgArray = [eductionImg, personalImg, documentImg, communityImg, spreadImg];

const ObjectivesSection = () => {
    return (
        <div className="flex flex-col justify-center items-center py-12 px-4" data-aos="fade-up">
            {/* Section Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row justify-center items-center gap-2">
                <span>Our</span>
                <span className="text-green-700">Objectives</span>
            </h2>

            {/* Cards Container */}
            <div className="flex flex-wrap justify-center gap-8 mt-10 max-w-6xl">
                {ObjectArray.map((objective, index) => (
                    <div
                        key={index}
                        className="group bg-white hover:bg-green-50 transition duration-300 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center max-w-xs min-w-[280px]"
                    >
                        {/* Image */}
                        <div className="w-16 h-16 rounded-full overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                            <img
                                src={imgArray[index]}
                                alt={objective.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 group-hover:text-green-700">
                            {objective.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                            {objective.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ObjectivesSection;
