import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import navlogo from '../assets/LOGO.png';
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    return (
        <div className="relative">
            <nav className="font-poppins">
                <div className="hidden md:flex flex-row items-center justify-between px-6 py-0">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center gap-2">
                            <IoMdMail /><span className="text-gray-600">contactus@gmail.com</span>
                        </div>
                        <div className="border-l-black border-solid border-l-2 h-4 m-4"></div>
                        <div className="flex flex-row items-center gap-2">
                            <FaPhoneAlt /><span className="text-gray-600">+91 1023458233</span>
                        </div>
                        <div className="border-l-black border-solid border-l-2 h-4 m-4"></div>
                        <div className="text-gray-600">FAQs</div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <hr />
                <div className="flex flex-row items-center justify-between px-6 py-2">
                    <div>
                        <img src={navlogo} alt="Logo" className="h-12 w-16" />
                    </div>
                    <ul className="hidden md:flex flex-row gap-8 text-lg items-center">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-red-800" : "text-black"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "text-red-800" : "text-black"}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-red-800" : "text-black"}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/getInvolved' className={({ isActive }) => isActive ? "text-red-800" : "text-black"}>
                                Get Involved
                            </NavLink>
                        </li>
                        <button className="border-solid border-red-600 border-2 px-4 py-2">Donate Now</button>
                    </ul>
                    <FiAlignJustify className="flex md:hidden text-2xl" onClick={() => setIsNavbarOpen(true)} aria-label="Open Menu" />
                </div>
            </nav>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isNavbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsNavbarOpen(false)}></div>
            <nav className={`flex md:hidden fixed top-0 right-0 bg-red-600 text-white h-screen z-50 p-4 transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <FiX className="text-xl mb-4" onClick={() => setIsNavbarOpen(false)} aria-label="Close Menu" />
                <ul className="flex flex-col gap-4 text-lg items-end justify-start font-semibold">
                    <li>
                        <NavLink to='/' className={({ isActive }) => isActive ? "text-red-900" : "text-white"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "text-red-900" : "text-white"}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-red-900" : "text-white"}>
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/getInvolved' className={({ isActive }) => isActive ? "text-red-900" : "text-white"}>
                            Get Involved
                        </NavLink>
                    </li>
                    <button className="border-solid border-white border-2 px-2 md:px-4 py-1 md:py-2">Donate Now</button>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
