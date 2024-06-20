import React from 'react'

const NavLinks = ({ contentText }) => {
    return (
        <li className="px-4 py-1 nav-item rounded-md text-stone-900 hover:bg-stone-900 hover:text-stone-400 cursor-pointer">{contentText} </li>
    )
}

export default NavLinks
