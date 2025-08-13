import React from 'react';
import logoimg from '../assets/LOGO.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-slate-500 text-white font-poppins">
            {/* Main Footer Content */}
            <div className="flex justify-between px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-700">
                
                {/* Logo & Address */}
                <div className="space-y-4">
                    <Link to={'/'}><img src={logoimg} className="h-14" alt="footer logo" /></Link>
                    <p className="text-lg font-semibold text-white">
                        Join us in making a difference in the lives of those in need.
                    </p>
                    <Link to={'https://maps.app.goo.gl/7mH91tcJ9YPjFY4p9'}><span className="font-bold">Address:</span> <span className='hover:text-green-400'>C-48, 4th Floor, Abul Fazal Enclave-1, High Tension Road, Jamia Nagar, Okhla, South Delhi - 110025</span></Link>
                    <p><span className="font-bold">Phone:</span> +91 7530860796</p>
                    <Link to="mailto:foundationseekh@gmail.com"><span className="font-bold">Email:</span> <span className='hover:text-green-400'>foundationseekh@gmail.com</span></Link>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        {['Home', 'About', 'Projects', 'Get Involved'].map((item, i) => (
                            <li key={i}>
                                <Link to={`/${item.replace(/\s+/g, '')}`} className="hover:text-green-400 transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2">
                        {['Help & FAQ', 'Causes', 'Events', 'Contact Us'].map((item, i) => (
                            <li key={i} className="hover:text-green-400 transition-colors cursor-pointer">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Connect with Us</h3>
                    <div className="flex gap-3 text-2xl">
                        <Link to="https://www.facebook.com/share/tD1xNBWwsxpJx1iU/?mibextid=qi2Omg" className="hover:text-blue-600"><FaFacebook /></Link>
                        <Link to="https://x.com/SEEKHFoundation?t=81Bk2vVDgMYbx4eu53-l-A&s=09" className="hover:text-blue-500"><FaXTwitter /></Link>
                        <Link to="https://www.linkedin.com/company/seekhfoundation/" className="hover:text-blue-700"><FaLinkedin /></Link>
                        <Link to="https://www.instagram.com/seekhfoundation?igsh=dnA5emRsOXEzcWlj" className="hover:text-pink-500"><FaInstagram /></Link>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="py-4 text-center text-sm bg-green-700 text-white">
                <Link to={'/dev-team'} className='font-poppins '>Meet the Development Team</Link>
            </div>
        </footer>
    );
};

export default Footer;
