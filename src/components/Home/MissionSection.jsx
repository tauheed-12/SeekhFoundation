import React from 'react';
import MissionCard from './MissionCard';
import { missionArray } from '../../Data/Mission';

const MissionSection = () => {
    return (
        <section 
            className="w-full flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50" 
            data-aos="fade-up"
        >
            <div className='flex flex-col justify-center items-center !mb-15'>
                {/* Section Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center tracking-tight">
                    Our <span className="text-green-700">Works</span>
                </h2>

                {/* Subheading */}
                <p className="text-slate-600 text-center text-lg md:text-xl font-poppins mt-3 max-w-2xl">
                    Our Community Empowerment Initiatives include a range of impactful projects aimed at creating lasting change.
                </p>
            </div>

            {/* Cards Container */}
            <div className="px-5 flex flex-wrap justify-center gap-8">
                {missionArray.map((mission, id) => (
                    <MissionCard 
                        key={id} 
                        image={mission.imgName} 
                        title={mission.title} 
                        description={mission.description} 
                    />
                ))}
            </div>
        </section>
    );
};

export default MissionSection;
