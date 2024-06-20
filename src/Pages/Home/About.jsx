import React from 'react';
import about_image from "../../assets/img6.jpg";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-image">
                    <img src={about_image} alt='about' />
                </div>
                <div className="about-text">
                    <h1>Transforming Lives through Education and Empowerment</h1>
                    <p>
                        Project Buniyaad is dedicated to transforming the lives of the Batla House Juggi community by addressing their most pressing needs. Our mission is to provide access to quality education, ensuring that every child in the community has the opportunity to learn and grow in a supportive environment.
                    </p>
                    <p>
                        In addition to education, Project Buniyaad assists community members in obtaining essential documents, such as birth certificates, Aadhar cards, and ration cards, which are crucial for accessing various government services and benefits.
                    </p>
                    <p>
                        <button className="about-button">
                            Learn More
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
