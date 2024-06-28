import React, { useState, useEffect } from 'react';
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import MissionCard from '../../components/MissionCard';
import mission1 from "../../assets/img12.jpg";
import { missionArray } from '../../Data/Mission';

const Mission = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3); // Default to 3 items for large screens

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth < 640) {
                setItemsToShow(1); // Show 1 item for small screens
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2); // Show 2 items for medium screens
            } else {
                setItemsToShow(3); // Show 3 items for large screens
            }
        };

        updateItemsToShow();
        window.addEventListener('resize', updateItemsToShow);

        return () => window.removeEventListener('resize', updateItemsToShow);
    }, []);

    const handleClick = (direction) => {
        const totalMissions = missionArray.length;
        if (direction === "left") {
            setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + totalMissions) % totalMissions);
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % totalMissions);
        }
    };

    const renderMissions = () => {
        const totalMissions = missionArray.length;
        const indices = Array.from({ length: itemsToShow }, (_, i) => (currentIndex + i) % totalMissions);
        return indices.map((index) => (
            <MissionCard
                key={index}
                image={mission1}
                title={missionArray[index].title}
                description={missionArray[index].description}
            />
        ));
    };

    return (
        <div className="my-6 mx-1 lg:mx-2 sm:mx-12 flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            <p className="text-3xl lg:text-4xl font-bold">Our <span className="text-greenColor">Mission</span></p>
            <p className="text-slate-600 text-center">
                Project Buniyaad aims to empower the Batla House Juggi community by addressing their
                key challenges:
            </p>
            <div className="w-full px-2 sm:px-10 flex flex-row gap-2 justify-center items-center">
                <img
                    src={left}
                    className="w-7 h-7 sm:mr-3 lg:mr-6 cursor-pointer"
                    onClick={() => handleClick("left")}
                    alt='left'
                />
                <div className="flex flex-row justify-center items-center gap-2 lg:gap-4">
                    {renderMissions()}
                </div>
                <img
                    src={right}
                    className="w-7 h-7 sm:ml-3 lg:ml-6 cursor-pointer"
                    onClick={() => handleClick("right")}
                    alt='right'
                />
            </div>
        </div>
    );
};

export default Mission;
