import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = ({ image, title, description }) => {
    return (
        <div className="bg-gradient-to-b from-slate-50 to-slate-100 md:shadow-xl flex flex-col justify-center items-center rounded-2xl relative mt-10 max-w-[330px] transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
            
            {/* Icon */}
            <div className="absolute -top-10 flex justify-center">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-20 h-20 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-lg bg-white object-cover transition-transform duration-300 hover:rotate-3"
                />
            </div>

            {/* Content */}
            <div className="p-6 pt-16 text-center">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 font-poppins">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {description}
                </p>
            </div>
        </div>
    );
};

MissionCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default MissionCard;
