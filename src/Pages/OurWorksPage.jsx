import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Hero from '../components/Hero';
import { GET_ALL_WORK } from '../api/worksSection/workApi';
import { useQuery } from '@apollo/client';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useQuery(GET_ALL_WORK);

  if (loading) return <p className="text-center text-gray-500 py-8">Loading...</p>;
  if (error) return <p className="text-center text-red-600 py-8">Error: {error.message}</p>;

  const completedProjects = data?.workSchemas || [];

  return (
    <>
      {/* Hero Section */}
      <Hero heading="Our Works" subheading="Introduction to the foundation Events." isButton={false} />

      {/* Section Heading */}
      <div className="w-full text-center !mt-8 !mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          <span className="text-black">Our</span>{' '}
          <span className="text-green-700">Works</span>
        </h1>
        <p className="mt-3 text-gray-600 mx-auto text-lg">
          Explore our completed projects that showcase our dedication and impact.
        </p>
      </div>

      {/* Completed Projects */}
      <section className="mb-24 px-4 sm:px-8 md:px-16 !mb-10">
        <div className="flex flex-col gap-4">
          <h2 className="sm:text-xl md:text-2xl font-semibold">
            <span className="text-black">Completed</span>{' '}
            <span className="text-green-700">Works</span>
          </h2>
          <div className="w-[100px] h-1 bg-green-700 hover:w-[150px] transition-all duration-500 !mb-6"></div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {completedProjects.map((project, id) => (
            <div
              key={id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              data-aos="fade-up"
            >
              {/* Image */}
              <div className="overflow-hidden bg-gray-200">
                <img
                  src={project.workAssets?.url}
                  alt={project.workHeading}
                  className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-xl font-bold text-green-700 mb-3">{project.workHeading}</h3>
                <p className="text-gray-700 flex-1">{project.workContent}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
