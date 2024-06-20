import React from 'react';
import NavLinks from './NavLinks';
import { Link } from 'react-router-dom';
import { TfiAlignJustify } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { useState } from 'react';

const Navbar = () => {
    const [isMenubar, setMenubar] = useState(false);

    function handleClick() {
        setMenubar(true);
    }

    return (
        <div className="relative text-center px-2 sm:px-4 py-2 flex justify-center items-center shadow-md">
            <button className="flex sm:hidden ml-2" onClick={handleClick} ><TfiAlignJustify /></button>
            <div className="flex-[1] px-2 py-2 font-bold text-xl sm:text-2xl">
                <span>Seekh Buniyaad</span>
            </div>

            <ul className="flex-[2] px-6 py-2 hidden sm:flex flex-row items-center gap-4  text-xl">
                <Link to='/'>
                    <NavLinks contentText="Home" />
                </Link>
                <Link to='/aboutUs'>
                    <NavLinks contentText="About Us" />
                </Link>
                <NavLinks contentText="Projects" />
                <NavLinks contentText="Get Involved" />
                <NavLinks contentText="Resources" />
                <NavLinks contentText="Contact Us" />
            </ul>
            {isMenubar ? <div className="absolute top-12 left-0 lg:hidden flex flex-col bg-slate-200 font-semibold p-4 py-8">
                <TfiClose className='absolute top-2 right-2' onClick={() => { setMenubar(false) }} />
                <ul>
                    <Link to='/'>
                        <NavLinks contentText="Home" />
                    </Link>
                    <Link to='/aboutUs'>
                        <NavLinks contentText="About Us" />
                    </Link>
                    <NavLinks contentText="Projects" />
                    <NavLinks contentText="Get Involved" />
                    <NavLinks contentText="Resources" />
                    <NavLinks contentText="Contact Us" />
                </ul>
            </div> : undefined}
        </div>
    )
}

export default Navbar
