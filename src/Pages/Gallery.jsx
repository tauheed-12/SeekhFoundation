import React from 'react';
import { useEffect } from 'react';
import img1 from '../assets/galler7.jpg';
import img2 from '../assets/gallery1.jpg';
import img3 from '../assets/gallery2.jpg';
import img4 from '../assets/gallery3.jpg';
import img5 from '../assets/gallery4.jpg';
import img6 from '../assets/gallery5.jpg';
import img7 from '../assets/gallery6.jpg';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const images = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="w-full h-64 bg-gray-200">
                        <img src={image} alt={`img${index}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
