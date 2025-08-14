import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import navlogo2 from '../assets/logo2.png';
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import navlogo from '../assets/LOGO.png';
import '../css/Hero.css';

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
            <nav className="font-poppins text-sm text-gray-700">
                {/* Top Bar */}
                {/* <div className="hidden md:flex justify-between items-center px-6 py-2 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-6">
                    <Link to="mailto:foundationseekh@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-green-700">
                    <IoMdMail />
                    foundationseekh@gmail.com
                    </Link>
                    <span className="h-4 border-l border-gray-400"></span>
                    <div className="flex items-center gap-2 text-gray-600">
                    <FaPhoneAlt />
                    +91 7530860796
                    </div>
                    <span className="h-4 border-l border-gray-400"></span>
                    <Link to="#" className="hover:text-green-700">FAQs</Link>
                </div>
                <div className="flex gap-4 text-lg text-gray-600">
                    <Link to="https://www.facebook.com/share/tD1xNBWwsxpJx1iU/?mibextid=qi2Omg" className="hover:text-blue-600"><FaFacebook /></Link>
                    <Link to="https://x.com/SEEKHFoundation?t=81Bk2vVDgMYbx4eu53-l-A&s=09" className="hover:text-blue-500"><FaTwitter /></Link>
                    <Link to="https://www.linkedin.com/company/seekhfoundation/" className="hover:text-blue-700"><FaLinkedin /></Link>
                    <Link to="https://www.instagram.com/seekhfoundation?igsh=dnA5emRsOXEzcWlj" className="hover:text-pink-500"><FaInstagram /></Link>
                </div>
                </div> */}

                {/* Main Navbar */}
                <div className={`bg-white shadow-sm px-4 md:px-6 py-3 flex justify-between items-center ${scrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
                {/* Logo */}
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={navlogo} alt="Logo" className="h-10 w-14" />
                    <img src={navlogo2} alt="Logo Text" className="h-8 max-w-[250px]" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-8 items-center text-base">
                    {["Home", "About", "Our Works", "Get Involved", "Gallery"].map((text, idx) => (
                    <li key={idx}>
                        <NavLink
                        to={text === "Home" ? "/" : `/${text.replace(/\s+/g, '').toLowerCase()}`}
                        className={({ isActive }) => isActive ? "text-green-800 font-medium" : "text-gray-800 hover:text-green-700"}
                        >
                        {text}
                        </NavLink>
                    </li>
                    ))}
                    <Link
                    to={'/donate'}
                    className="hero-cta !px-4 !py-2"
                    >
                    Donate Now
                    </Link>
                </ul>

                {/* Mobile Menu Icon */}
                <FiAlignJustify className="lg:hidden text-2xl cursor-pointer" onClick={() => setIsNavbarOpen(true)} />
                </div>
            </nav>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isNavbarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsNavbarOpen(false)}
            ></div>

            {/* Mobile Sidebar Nav */}
            <nav className={`fixed top-0 right-0 w-3/4 sm:w-2/5 bg-green-700 text-white h-screen z-50 p-6 flex flex-col justify-start transition-transform duration-300 ${isNavbarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Menu</span>
                <FiX className="text-3xl cursor-pointer" onClick={() => setIsNavbarOpen(false)} />
                </div>
                <ul className="flex flex-col gap-4 text-lg">
                {["Home", "About", "Our Works", "Get Involved", "Gallery"].map((text, idx) => (
                    <li key={idx}>
                    <NavLink
                        to={text === "Home" ? "/" : `/${text.replace(/\s+/g, '').toLowerCase()}`}
                        className={({ isActive }) => isActive ? "text-green-300 font-medium" : "text-white hover:text-green-200"}
                        onClick={() => setIsNavbarOpen(false)}
                    >
                        {text}
                    </NavLink>
                    </li>
                ))}
                </ul>
                <button className="mt-6 w-full px-4 py-2 bg-green-900 hover:bg-green-800 text-white rounded-lg transition duration-200">
                Donate Now
                </button>
            </nav>
            </div>
    );
}

export default Navbar;
