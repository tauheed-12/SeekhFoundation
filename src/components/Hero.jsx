import React from 'react';
import '../css/Hero.css';
import { Link } from 'react-router-dom';

const Hero = ({ heading, subheading }) => {
    return (
        <div className="hero-banner font-poppins">
            <div className="hero-content">
                <h1 className="hero-heading">{heading}</h1>
                <p className="hero-subheading">{subheading}</p>
                <div className="hero-buttons">
                    <Link to='/about'>
                        <button className="hero-cta">Learn More</button>
                    </Link>
                    <Link to='https://forms.gle/sAjVd7jhaM2ihXeV6'>
                        <button className="hero-cta secondary">Join Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
