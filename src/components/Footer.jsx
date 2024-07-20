import React from 'react';
import logoimg from '../assets/LOGO.png';

const Footer = () => {
    return (
        <div>
            <div className="flex flex-row flex-wrap gap-5 justify-between px-6 py-8 bg-slate-200 font-poppins">
                <div className="flex flex-col gap-3">
                    <img src={logoimg} className="w-12 h-12" alt='footer img' />
                    <p className="text-xl font-semibold text-gray-700">Join us in making a difference in the lives of those in need</p>
                    <p><span className="text-xl font-bold mr-2">Addresss:</span>Batla House Okhla New Delhi</p>
                    <p><span className="text-xl font-bold mr-2">Phone</span>+91 7502949908023</p>
                    <p><span className="text-xl font-bold mr-2">Email</span>contactus@gmail.com</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Projects</li>
                        <li className="cursor-pointer">Get Involved</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Supports</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">Help & FAQ</li>
                        <li className="cursor-pointer">Causes</li>
                        <li className="cursor-pointer">Events</li>
                        <li className="cursor-pointer">Contact Us</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Connect with us</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">Watsapp</li>
                        <li className="cursor-pointer">Twitter</li>
                        <li className="cursor-pointer">Instagram</li>
                        <li className="cursor-pointer">LinkedIn</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center py-6 bg-red-700 text-white font-poppins px-3">
                <p>Designed and developed with love by Mohd Tauheed</p>
            </div>
        </div>
    );
}

export default Footer;
