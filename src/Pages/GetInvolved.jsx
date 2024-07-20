import React from 'react';
import img1 from "../assets/img4.jpg";
import img3 from "../assets/banner.jpeg";
import Hero from './Home/Hero';

const InfoBlock = ({ title, paragraphs, listItems, buttonText, imgSrc, imgAlt, reverse }) => (
    <div className={`bg-slate-100 my-4 py-3 sm:py-5 md:py-8 px-4 sm:px-12 md:px-16 rounded-lg flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center mb-12 relative`}>
        <div className="flex-1 mb-6">
            <img src={imgSrc} alt={imgAlt} className="w-full h-auto rounded-lg shadow-lg object-cover md:h-96 hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="flex-[2] md:px-6 text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-green-500 mb-4">{title}</h2>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4">{paragraph}</p>
            ))}
            {listItems && (
                <ul className="list-disc list-inside text-gray-700 mb-4">
                    {listItems.map((item, index) => (
                        <li key={index}><strong>{item.title}:</strong> {item.description}</li>
                    ))}
                </ul>
            )}
            {buttonText && (
                <div className="flex justify-center md:justify-start">
                    <button className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-900 transition-colors duration-300">{buttonText}</button>
                </div>
            )}
        </div>
    </div>
);

function GetInvolved() {
    return (
        <>
            <Hero heading="Get Involved with us" subheading="Introduction to the foundation Projects." isButton={false} />

            <section className="py-2 sm:py-4 md:py-4 px-6 sm:px-12 md:px-16">
                <InfoBlock
                    title="Volunteer with Us"
                    paragraphs={[
                        "Volunteering is a fantastic way to give back to the community, meet new people, and gain valuable skills. At Seekh Foundation, we have a variety of volunteer opportunities that cater to different interests and skill sets.",
                        "Why Volunteer with Us?"
                    ]}
                    listItems={[
                        { title: "Make a Difference", description: "Contribute to meaningful causes and see the impact of your efforts firsthand." },
                        { title: "Build Community", description: "Connect with like-minded individuals and form lasting relationships." },
                        { title: "Develop Skills", description: "Gain experience in areas such as event planning, customer service, and more." }
                    ]}
                    buttonText="Volunteer"
                    imgSrc={img1}
                    imgAlt="Volunteers"
                />
            </section>

            <section className="py-2 sm:py-4 md:py-4 px-6 sm:px-12 md:px-16">
                <InfoBlock
                    title="Donate"
                    paragraphs={[
                        "Your donations make a significant impact on our community. At Seekh Foundation, we ensure that every contribution is used efficiently to support our programs and initiatives. Your generosity helps us:",
                        "Every donation, no matter the size, contributes to making a positive difference. Thank you for your support!"
                    ]}
                    listItems={[
                        { title: "Support Those in Need", description: "Provide essential resources to individuals and families." },
                        { title: "Fund Programs", description: "Sustain educational, health, and social programs." },
                        { title: "Promote Growth", description: "Invest in community development projects." }
                    ]}
                    buttonText="Donate"
                    imgSrc={img3}
                    imgAlt="Donation Impact"
                    reverse
                />
            </section>

            <section className="sm:max-w-5xl sm:mx-auto bg-white sm:p-8 rounded-lg shadow-lg text-center mb-12 py-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Spread the Word</h2>
                <p className="text-gray-600 mb-6">How supporters can help by sharing information.</p>
                <div className="flex justify-center space-x-4 flex-wrap gap-2">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors duration-300">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors duration-300">Instagram</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-300">LinkedIn</a>
                </div>
            </section>
        </>
    );
}

export default GetInvolved;
