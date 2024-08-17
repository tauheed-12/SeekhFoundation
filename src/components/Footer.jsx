import React from 'react';
import logoimg from '../assets/LOGO.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="flex flex-row flex-wrap gap-5 justify-between px-6 py-8 bg-slate-200 font-poppins">
                <div className="flex flex-col gap-3">
                    <img src={logoimg} className="w-12 h-12" alt='footer img' />
                    <p className="text-xl font-semibold text-gray-700">Join us in making a difference in the lives of those in need</p>
                    <p><span className="text-xl font-bold mr-2">Addresss:</span>C-48,4th Floor, Abul Fazal Enclave-1, High Tension Road,Jamia Nagar, Okhla, South Delhi- 110025</p>
                    <p><span className="text-xl font-bold mr-2">Phone</span>+91 7530860796</p>
                    <p><span className="text-xl font-bold mr-2">Email</span>foundationseekh@gmail.com</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="cursor-pointer">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to='/about'>About</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to='/getInvolved'>Get Involved</Link>
                        </li>
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
                        <li className="cursor-pointer">
                            <Link to='https://www.facebook.com/share/tD1xNBWwsxpJx1iU/?mibextid=qi2Omg'>Facebook</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to='https://x.com/SEEKHFoundation?t=81Bk2vVDgMYbx4eu53-l-A&s=09'>Twitter</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to='https://www.instagram.com/seekhfoundation?igsh=dnA5emRsOXEzcWlj'>Instagram</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link to='https://www.linkedin.com/company/seekhfoundation/'>LinkedIn</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center py-6 bg-green-700 text-white font-poppins px-3">
                <p>Designed and developed with love by Mohd Tauheed</p>
            </div>
        </div>
    );
}

export default Footer;
