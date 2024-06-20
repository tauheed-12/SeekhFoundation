import React from 'react';
import PropTypes from 'prop-types';


const MissionCard = ({ image, title, description }) => {
    return (
        <div className="sm:h-96 max-w-sm  rounded overflow-hidden shadow-lg bg-white">
            <div className="h-52 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-700 text-base">{description}</p>
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
