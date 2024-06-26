import React from 'react';
import img1 from "../assets/img4.jpg";
import img3 from "../assets/banner.jpeg";

function GetInvolved() {
    return (
        <>
            <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center mb-12 relative">
                <div className="md:w-2/3 md:pr-6 text-center md:text-left mb-4 md:mb-0">
                    <h2 className="text-3xl font-bold text-green-500 mb-4">Volunteer with Us</h2>
                    <p className="text-gray-700 mb-4">
                        Volunteering is a fantastic way to give back to the community, meet new people, and gain valuable skills. At Seekh Foundation, we have a variety of volunteer opportunities that cater to different interests and skill sets.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Why Volunteer with Us?</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Make a Difference:</strong> Contribute to meaningful causes and see the impact of your efforts firsthand.</li>
                        <li><strong>Build Community:</strong> Connect with like-minded individuals and form lasting relationships.</li>
                        <li><strong>Develop Skills:</strong> Gain experience in areas such as event planning, customer service, and more.</li>
                    </ul>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition-colors duration-300">Volunteer</button>
                    </div>
                </div>
                <div className="md:w-1/2 relative">
                    <img src={img1} alt="Volunteers" className="w-full h-auto rounded-lg shadow-lg object-cover md:h-96 hover:scale-105 transition-transform duration-300" />
                </div>
            </section>

            <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg flex flex-col items-center mb-12">
                <div className="w-full md:w-2/3 mb-6">
                    <img src={img3} alt="Donation Impact" className="w-full h-auto rounded-lg shadow-lg object-cover md:h-96 hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="w-full md:w-2/3 md:pl-6 mb-6">
                    <h2 className="text-3xl font-bold text-green-500 mb-4">Donate</h2>
                    <p className="text-gray-700 mb-4">
                        Your donations make a significant impact on our community. At Seekh Foundation, we ensure that every contribution is used efficiently to support our programs and initiatives. Your generosity helps us:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li><strong>Support Those in Need:</strong> Provide essential resources to individuals and families.</li>
                        <li><strong>Fund Programs:</strong> Sustain educational, health, and social programs.</li>
                        <li><strong>Promote Growth:</strong> Invest in community development projects.</li>
                    </ul>
                    <p className="text-gray-700 mb-4">
                        Every donation, no matter the size, contributes to making a positive difference. Thank you for your support!
                    </p>
                </div>
                <div className="bg-white p-4 shadow-lg flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Support Matters</h3>
                    <p className="text-gray-600 mb-2">Help us continue our mission with your generous donation.</p>
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition-colors duration-300">Donate Now</button>
                    <p className="text-sm text-gray-500 mt-2">Every donation makes a difference!</p>
                </div>
            </section>

            <section className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Spread the Word</h2>
                <p className="text-gray-600 mb-6">How supporters can help by sharing information.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300">Instagram</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300">LinkedIn</a>
                </div>
            </section>
        </>
    );
}

export default GetInvolved;
