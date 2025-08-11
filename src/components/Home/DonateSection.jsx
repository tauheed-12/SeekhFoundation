import React from 'react';
import img from '../../assets/im14.jpg';

const DonateSection = () => {
    return (
        <section className="bg-slate-50 py-16 px-6 lg:px-20 font-poppins" data-aos="fade-up">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                
                {/* Image Section */}
                <div className="flex-1 relative">
                    <div className="absolute -top-6 -left-6 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-50"></div>
                    <img 
                        src={img} 
                        alt="Be the Light" 
                        className="w-full max-w-md mx-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
                        Be the <span className="text-green-700 relative">
                            Light
                            <span className="absolute left-0 bottom-0 w-full h-2 bg-green-300 -z-10"></span>
                        </span> Around You
                    </h2>

                    <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                        We may not be able to brighten up the whole world, but we can become a source
                        of light in our own circles. Your donation helps those fighting against poverty
                        by providing the support they need to overcome challenges. Join us in making a
                        difference—be the light that guides others toward hope and a better future.
                    </p>

                    <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
                        Donate Now
                    </button>
                </div>
            </div>
        </section>
    );
}

export default DonateSection;
