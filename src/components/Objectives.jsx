import React from 'react';
import { ObjectArray } from '../Data/Objective';
import eductionImg from '../assets/education.jpeg';
import communityImg from '../assets/Community.jpeg';
import documentImg from '../assets/document.png';
import personalImg from '../assets/personalDev.jpeg';
import spreadImg from '../assets/spread.jpg';

const imgArray = [eductionImg, personalImg, documentImg, communityImg, spreadImg];

const Objectives = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-100 py-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold flex flex-row justify-center items-center gap-2"><span>Our</span><span className="text-green-700">Objectives</span></p>
            <div className="flex flex-row px-2 py-8 gap-6 flex-wrap items-center justify-center">
                {ObjectArray.map((objective, index) => (
                    <div
                        key={index}
                        className="lg:h-72 flex-1 flex flex-col py-8 lg:py-8 justify-center items-center gap-6 md:shadow-2xl borders bg-white rounded-2xl min-w-[300px] max-w-[400px]"
                    >
                        <p className="text-xl font-bold text-center">{objective.title}</p>
                        <img src={imgArray[index]} alt={objective.title} className="w-14 h-14" />
                        <p className=" text-stone-400 w-3/4 text-center">{objective.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Objectives;
