import React from 'react';
import MissionCard from './MissionCard';
import { missionArray } from '../../Data/Mission';

const MissionSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row justify-center items-center gap-2"><span>Our</span><span className="text-green-700">Works</span></p>
            <p className="text-slate-600 text-center text-lg font-poppins">
                Our Community Empowerment Initiatives includes
            </p>
            <div className="w-full px-2 sm:px-4 md:px-3 lg:px-2 flex flex-row flex-wrap gap-6 justify-center items-center mt-4">
                {missionArray.map((mission, id) => (
                    <MissionCard image={mission.imgName} title={mission.title} description={mission.description} key={id} />
                ))}
            </div>
        </div>
    );
};

export default MissionSection;
