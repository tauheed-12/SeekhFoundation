import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { allProjects, successStories } from '../Data/Projects';
import Hero from './Home/Hero';

const Projects = () => {
  const ongoingProjects = allProjects.filter(project => project.status === 'ongoing');
  const completedProjects = allProjects.filter(project => project.status === 'completed');

  return (
    <>
      <div className="">
        <Hero heading="Our Projects" subheading="Introduction to the foundation Projects." isButton={false} />

        <h1 className="text-5xl font-bold my-6 text-center">
          <span className="text-black p-1">Our</span> <span className="text-green-700">Projects</span>
        </h1>

        <div className="mb-14 flex flex-col justify-center items-center py-4 px-4 sm:px-12 md:px-20">
          <h2 className="text-2xl font-semibold w-full text-left">
            <span className="text-black">Ongoing</span> <span className="text-green-700">Projects</span>
          </h2>
          <div className="w-full mb-4">
            <div className="w-[100px] h-1 bg-green-700 hover:w-[150px] transition-all duration-700"></div>
          </div>
          <div className="flex justify-center items-center flex-wrap lg:flex-nowrap gap-4 flex-row">
            {ongoingProjects.map((project, id) => (
              <div key={id} className='flex flex-col justify-center items-center'>
                <div className={`bg-${project.id % 2 === 0 ? 'white' : 'gray-100'} shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300`}>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-44 object-cover rounded-t-lg transition duration-300 transform hover:scale-105" />
                  <div className="py-4 px-4 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">{project.title}</h3>
                    <p className="text-gray-700 text-md mb-6">{project.description}</p>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-900 transition duration-300">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 flex flex-col justify-center items-center py-4 px-4 sm:px-12 md:px-20">
          <h2 className="text-2xl font-semibold w-full text-left">
            <span className="text-black">Completed</span> <span className="text-green-700">Projects</span>
          </h2>
          <div className="w-full mb-4">
            <div className="w-[100px] h-1 bg-green-700 hover:w-[150px] transition-all duration-700"></div>
          </div>
          <div className="flex justify-center items-center gap-4 flex-wrap lg:flex-nowrap flex-row">
            {completedProjects.map((project, id) => (
              <div key={id} className='flex flex-col justify-center items-center'>
                <div className={`bg-${project.id % 2 === 0 ? 'white' : 'gray-100'} shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300`}>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-44 object-cover rounded-t-lg transition duration-300 transform hover:scale-105" />
                  <div className="py-4 px-4 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-bold mb-4 text-green-600">{project.title}</h3>
                    <p className="text-gray-700 text-md mb-6">{project.description}</p>
                    <button className="bg-green-700 text-white px-4 py-2 rounded-full text-sm hover:bg-green-900 transition duration-300">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg mb-24">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          <span className="text-black p-1">Success</span> <span className="text-green-700">Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {successStories.map((story, id) => (
            <div key={id} className="flex flex-col justify-center items-center bg-gray-200 shadow-xl rounded-lg hover:shadow-2xl transition duration-300">
              <img src={story.imageUrl} alt={story.name} className="w-24 h-24 object-cover rounded-full transition duration-300 transform hover:scale-105 -mt-8 z-10" />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-green-600">{story.name}</h3>
                <p className="text-gray-700 text-base mb-4">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
