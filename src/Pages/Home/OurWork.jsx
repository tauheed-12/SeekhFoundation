import React from 'react';
import news1 from "../../assets/img1.jpg";
import news2 from "../../assets/img2.jpg";
import news3 from "../../assets/img3.jpg";
import news4 from "../../assets/img4.jpg";
import news5 from "../../assets/img8.jpg";
import news6 from "../../assets/img10.jpg";
import './OurWork.css'
const OurWork = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-green-500 font-bold">Our Works</h1>
            <div className="container">
                <div className="card">
                    <div className="image">
                        <img src={news1} alt="Description" />
                    </div>
                    <div className="content">
                        <h1>News1</h1>
                        <h3>This is content</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={news3} alt="Description" />
                    </div>
                    <div className="content">
                        <h3>This is content</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={news2} alt="Description" />
                    </div>
                    <div className="content">
                        <h3>This is content</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="image">
                        <img src={news4} alt="Description" />
                    </div>
                    <div className="content">
                        <h3>This is content</h3>
                        <p>
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;
