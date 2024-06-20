import React from 'react';

const Footer = () => {
    return (
        <div className="w-full py-8 px-8 flex flex-col gap-6 bg-black text-white">
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="p-4 text-lg md:text-xl">
                    <p>Batla House Okhla Nagar, New Delhi 273162</p>
                    <div className="mt-2">
                        <p>Join us as:</p>
                        <div className="flex gap-2 mt-1">
                            <span className="hover:underline cursor-pointer">Volunteer</span>
                            <span className="hover:underline cursor-pointer">Donate</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap p-4 gap-4 text-center md:text-left">
                    <span className="hover:underline cursor-pointer">Home</span>
                    <span className="hover:underline cursor-pointer">About</span>
                    <span className="hover:underline cursor-pointer">Resources</span>
                    <span className="hover:underline cursor-pointer">Get Involved</span>
                    <span className="hover:underline cursor-pointer">Projects</span>
                    <span className="hover:underline cursor-pointer">Contact Us</span>
                </div>
            </div>
            <div className="h-0.5 bg-white w-full"></div>
            <div className="flex gap-4 items-center justify-center">
                <span className="hover:underline cursor-pointer">Instagram</span>
                <span className="hover:underline cursor-pointer">WhatsApp</span>
                <span className="hover:underline cursor-pointer">Email</span>
            </div>
        </div>
    );
}

export default Footer;
