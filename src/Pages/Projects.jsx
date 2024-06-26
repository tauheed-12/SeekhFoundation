import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { allProjects, successStories } from '../Data/Projects';




const Projects = () => {


  const ongoingProjects = allProjects.filter(project => project.status === 'ongoing');
  const completedProjects = allProjects.filter(project => project.status === 'completed');

  return (
    <>
      <div className="container mx-auto p-4">
        <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay className="mb-8">
          {allProjects.map((project, index) => (
            <div key={index} className="relative">
              <img src={project.imageUrl} alt={project.title} className="rounded-lg h-80 object-cover w-full" />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <p className="text-white">{project.description}</p>
              </div>
            </div>
          ))}
        </Carousel>

        <h1 className="text-5xl font-bold mb-12 text-center">
          <span className="text-black p-1">Our</span> <span className="text-green-600">Projects</span>
        </h1>

        <div className="mb-24">
          <h2 className="text-4xl font-semibold mb-8">
            <span className="text-black p-1">Ongoing</span> <span className="text-green-500">Projects</span>
          </h2>
          <div className="space-y-8">
            {ongoingProjects.map((project, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                <div className={`bg-${index % 2 === 0 ? 'white' : 'gray-100'} shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 w-full md:w-3/4 lg:w-2/3`}>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg transition duration-300 transform hover:scale-105" />
                  <div className="p-8">
                    <h3 className="text-4xl font-bold mb-4 text-green-600">{project.title}</h3>
                    <p className="text-gray-700 text-lg mb-6">{project.description}</p>
                    <button className="bg-green-500 text-white px-8 py-3 rounded-full text-lg hover:bg-green-600 transition duration-300">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-semibold mb-8">
            <span className="text-black p-1">Completed</span> <span className="text-green-500">Projects</span>
          </h2>
          <div className="space-y-8">
            {completedProjects.map((project, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}>
                <div className={`bg-${index % 2 === 0 ? 'white' : 'gray-100'} shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 w-full md:w-3/4 lg:w-2/3`}>
                  <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-t-lg transition duration-300 transform hover:scale-105" />
                  <div className="p-8">
                    <h3 className="text-4xl font-bold mb-4 text-green-600">{project.title}</h3>
                    <p className="text-gray-700 text-lg mb-6">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-24">
        <h2 className="text-4xl font-semibold mb-8 text-center">
          <span className="text-black p-1">Success</span> <span className="text-green-500">Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300">
              <img src={story.imageUrl} alt={story.name} className="w-full h-48 object-cover rounded-t-lg transition duration-300 transform hover:scale-105" />
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
