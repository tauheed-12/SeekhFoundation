import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { allProjects } from '../../Data/Projects';
const OurWork = () => {
    return (
        <div className=" bg-green-100 flex flex-col justify-center items-center w-5/6 py-8 mb-4">
            <h1 className="text-4xl text-green-500 font-bold">Our Works</h1>
            <div className=" flex flex-row justify-center items-center px-16 py-8 my-4">
                <div className=" flex-1 flex flex-col gap-4 text-lg font-sans">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec eros velit. Curabitur vel bibendum arcu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec eros velit. Curabitur vel bibendum arcu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec eros velit. Curabitur vel bibendum arcu.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec eros velit. Curabitur vel bibendum arcu.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Aenean nec eros velit. Curabitur vel bibendum arcu.
                    </p>
                </div>
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="flex-1">
                    {allProjects.map((project, index) => (
                        <div key={index} className="w-full rounded-none">
                            <img src={project.imageUrl} alt={project.title} className="h-80 object-cover w-full" />
                            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4">
                                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                                <p className="text-white">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default OurWork;
