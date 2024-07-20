import React from 'react';
import PropTypes from 'prop-types';


const MissionCard = ({ image, title, description }) => {
    return (
        <div className="sm:h-72 bg-white flex flex-col justify-center items-center rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl relative mt-6 max-w-[330px]">
            <img src={image} alt={title} className="lg:w-24 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:h-24 rounded-full absolute -top-6" />
            <div className="p-2 mt-12 pt-0 flex flex-col justify-center items-center">
                <h3 className="text-lg sm:text-lg md:text-xl mb-2 text-center font-poppins">{title}</h3>
                <p className="text-gray-500 text-center">{description}</p>
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
