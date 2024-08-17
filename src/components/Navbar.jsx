import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import navlogo2 from '../assets/logo2.png';
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import navlogo from '../assets/LOGO.png';

const Navbar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className="relative">
            <nav className="font-poppins">
                <div className="hidden md:flex flex-row items-center justify-between px-6 py-0">
                    <div className="flex flex-row items-center">
                        <div className="flex flex-row items-center gap-2">
                            <IoMdMail /><span className="text-gray-600">foundationseekh@gmail.com</span>
                        </div>
                        <div className="border-l-black border-solid border-l-2 h-4 m-4"></div>
                        <div className="flex flex-row items-center gap-2">
                            <FaPhoneAlt /><span className="text-gray-600">+91 7530860796</span>
                        </div>
                        <div className="border-l-black border-solid border-l-2 h-4 m-4"></div>
                        <div className="text-gray-600">FAQs</div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Link to=''><FaFacebook /></Link>
                        <Link to='https://x.com/SEEKHFoundation?t=81Bk2vVDgMYbx4eu53-l-A&s=09'><FaTwitter /></Link>
                        <Link to='https://www.linkedin.com/company/seekhfoundation/'><FaLinkedin /></Link>
                        <Link><FaInstagram /></Link>
                    </div>
                </div>
                <hr />
                <div className={` bg-white flex flex-row items-center justify-between px-2 md:px-6 py-2 ${scrolled ? 'fixed top-0 w-full z-50' : ''}`}>
                    <div className="flex flex-row gap-2 justify-center flex-wrap items-center">
                        <img src={navlogo} alt="Logo" className="h-12 w-16" />
                        <img src={navlogo2} alt="" className="h-8 w-2/3" />
                    </div>
                    <ul className="hidden lg:flex flex-row gap-8 text-lg items-center font-poppins">
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-green-800" : "text-black"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "text-green-800" : "text-black"}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/projects' className={({ isActive }) => isActive ? "text-green-800" : "text-black"}>
                                Our Works
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/getInvolved' className={({ isActive }) => isActive ? "text-green-800" : "text-black"}>
                                Get Involved
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery' className={({ isActive }) => isActive ? "text-green-800" : "text-black"}>
                                Gallery
                            </NavLink>
                        </li>
                        <button className="border-solid border-green-600 border-2 px-4 py-2 text-white bg-green-950 rounded-md">Donate Now</button>
                    </ul>
                    <FiAlignJustify className="flex lg:hidden text-2xl" onClick={() => setIsNavbarOpen(true)} aria-label="Open Menu" />
                </div>
            </nav>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isNavbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsNavbarOpen(false)}></div>
            <nav className={`flex font-poppins lg:hidden fixed top-0 right-0 bg-green-700 text-white h-screen z-50 p-4 pr-8 transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col gap-4 text-lg items-start justify-start">
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) => isActive ? "text-green-950" : "text-white"}
                            onClick={() => setIsNavbarOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'
                            className={({ isActive }) => isActive ? "text-green-950" : "text-white"}
                            onClick={() => setIsNavbarOpen(false)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'
                            className={({ isActive }) => isActive ? "text-green-950" : "text-white"}
                            onClick={() => setIsNavbarOpen(false)}>
                            Our Works
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/getInvolved'
                            className={({ isActive }) => isActive ? "text-green-950" : "text-white"}
                            onClick={() => setIsNavbarOpen(false)}>
                            Get Involved
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery'
                            className={({ isActive }) => isActive ? "text-green-950" : "text-white"}
                            onClick={() => setIsNavbarOpen(false)}>
                            Gallery
                        </NavLink>
                    </li>
                    <hr className="border-solid border-t-2" />
                    <button className="border-solid text-white rounded-lg  bg-green-950 px-2 md:px-4 py-1 md:py-2">Donate Now</button>
                </ul>
                <FiX className="text-3xl mb-4" onClick={() => setIsNavbarOpen(false)} aria-label="Close Menu" />
            </nav>
        </div>
    );
}

export default Navbar;
