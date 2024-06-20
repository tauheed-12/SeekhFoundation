import React from 'react';
import news1 from "../../assets/img1.jpg";
import news2 from "../../assets/img2.jpg";
import news3 from "../../assets/img3.jpg";
import news4 from "../../assets/img4.jpg";
import news5 from "../../assets/img8.jpg";
import news6 from "../../assets/img10.jpg";


const OurWork = () => {
    return (
        <div className="p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-center">Our <span className="text-greenColor">Works</span></h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="relative overflow-hidden rounded-lg">
                    <img src={news1} alt="News 1" className="w-full h-48 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2 w-full">
                        <p>News Description 1</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={news2} alt="News 2" className="w-full h-64 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2 w-full">
                        <p>News Description 2</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={news3} alt="News 3" className="w-full h-40 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2 w-full">
                        <p>News Description 3</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={news4} alt="News 4" className="w-full h-56 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2 w-full">
                        <p>News Description 4</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={news5} alt="News 5" className="w-full h-72 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2 w-full">
                        <p>News Description 5</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg">
                    <img src={news6} alt="News 6" className="w-full h-60 object-cover" />
                    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-50 text-white p-2 w-full">
                        <p>News Description 6</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;
