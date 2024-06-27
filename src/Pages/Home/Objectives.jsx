import React from 'react';
import { ObjectArray } from '../../Data/Objective'; // Ensure the correct import path
import eductionImg from '../../assets/education.jpeg';
import communityImg from '../../assets/Community.jpeg';
import documentImg from '../../assets/document.png';
import personalImg from '../../assets/personalDev.jpeg';
import spreadImg from '../../assets/spread.jpg';
import './Objectives.css'; // Ensure the CSS file is imported

const imgArray = [eductionImg, personalImg, documentImg, communityImg, spreadImg];

const Objectives = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl lg:text-4xl font-bold">
                Our <span className="text-greenColor">Objectives</span>
            </p>
            <div className="flex flex-row px-2 py-8 gap-6 flex-wrap items-center justify-center">
                {ObjectArray.map((objective, index) => (
                    <div
                        key={index}
                        className="flex flex-col p-4 justify-center items-center h-72 w-10/12 sm:w-72 gap-6 shadow-lg borders"
                    >
                        <p className="text-xl font-bold">{objective.title}</p>
                        <img src={imgArray[index]} alt={objective.title} className="w-14 h-14" />
                        <p className="text-sm text-stone-400 w-3/4 text-center">{objective.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Objectives;
