import React from 'react';
import MissionCard from '../../components/MissionCard';
import { missionArray } from '../../Data/Mission';

const Mission = () => {
    return (
        <div className="my-6 w-full flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 bg-slate-100 py-4">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Our <span className="text-green-700">Works</span></p>
            <p className="text-slate-600 text-center text-lg font-poppins">
                Project Buniyaad aims to empower the Batla House Juggi community by addressing their
                key challenges:
            </p>
            <div className="w-full px-2 sm:px-4 md:px-3 lg:px-4 flex flex-row flex-wrap gap-2 justify-center items-center mt-4">
                {missionArray.map((mission, id) => (
                    <MissionCard image={mission.imgName} title={mission.title} description={mission.description} key={id} />
                ))}
            </div>
        </div>
    );
};

export default Mission;
