import React, { useEffect } from 'react';
import img1 from '../assets/galler7.jpg';
import img2 from '../assets/gallery1.jpg';
import img3 from '../assets/gallery2.jpg';
import img4 from '../assets/gallery3.jpg';
import img5 from '../assets/gallery4.jpg';
import img6 from '../assets/gallery5.jpg';
import img7 from '../assets/gallery6.jpg';
import Hero from '../components/Hero';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [img1, img2, img3, img4, img5, img6, img7];

    return (
        <>
            <Hero heading="Gallery" subheading="Some of our best memories" isButton={false} />
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-10">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 !mb-5">
                        📸 Our Gallery
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                                data-aos="fade-up"
                            >
                                <img
                                    src={image}
                                    alt={`img${index}`}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
