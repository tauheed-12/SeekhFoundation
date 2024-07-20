import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = ({ heading, subheading, isButton }) => {
    return (
        <div className="hero-banner font-poppins">
            <div className="hero-banner__content">
                <h1 className="hero-banner__heading">{heading}</h1>
                <p className="hero-banner__description">
                    {subheading}
                </p>
                <div className='hero-banner__button'>
                    <Link to='/about'><button className="hero-banner__cta">Learn More</button></Link>
                    <button className="hero-banner__cta">Join Us</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
