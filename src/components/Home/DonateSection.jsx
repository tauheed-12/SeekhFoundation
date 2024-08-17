import React from 'react';
import img from '../../assets/im14.jpg';

const DonateSection = () => {
    return (
        <div className='flex bg-slate-100 flex-col lg:flex-row justify-center items-center lg:space-x-8 p-8 lg:p-16' data-aos="fade-up">
            <div className='flex-1 mb-8 lg:mb-0'>
                <img src={img} alt='Be the Light' className='w-full h-auto max-w-sm mx-auto rounded-lg shadow-lg' />
            </div>
            <div className="flex-1 text-center lg:text-left">
                <p className="text-3xl lg:text-5xl font-bold mb-6 text-gray-800">
                    Be the Light Around You
                </p>
                <p className="text-lg lg:text-2xl mb-8 text-gray-700 leading-relaxed">
                    We may not be able to brighten up the whole world, but we can become a source
                    of light in our own circles.Your donation helps those fighting against poverty
                    by providing the support they need to overcomechallenges. Join us in making a
                    difference—be the light that guides others toward hope and a better future.
                </p>
                <button className="bg-green-600 hover:bg-green-800 text-white font-semibold 
                          py-3 px-6 rounded-lg shadow-lg transition-all duration-300">
                    Donate Now
                </button>
            </div>
        </div>
    );
}

export default DonateSection;
