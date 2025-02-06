import React from 'react';
import logo from '../assets/logo/mainLogo.png'
import { Link } from 'react-scroll';


const Navbar = () => {

    const links = <>
        <Link to='/' smooth={true} duration={500} offset={-50} >Home</Link>
        <Link to='project' smooth={true} duration={500} offset={-50}>Projects</Link>
        <Link to='about' smooth={true} duration={500} offset={-50}>About</Link>
        <Link to='contact' smooth={true} duration={500} offset={-50}>Contact</Link>
    </>
    return (
        <div className="navbar sticky top-0 z-50 bg-black bg-opacity-85 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 text-white w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 cursor-pointer shadow">
                        {links}
                    </ul>
                </div>
                <div className='w-16'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="md:navbar-end hidden md:mr-4 lg:flex">
                <ul className="menu menu-horizontal space-x-5 text-white px-1 cursor-pointer">
                    {links}
                </ul>
            </div>
            <button
                className="bg-orange-600 text-black px-4 py-2 rounded-md font-bold hidden md:flex hover:bg-yellow-600"
                onClick={() => window.open('https://docs.google.com/document/d/1YQDgCJmZw1Fj4LymmZd_H5k5yzpHvPvNjaBVLm-0C78/export?format=pdf', '_blank')}
            >
                Resume
            </button>
            <div className='navbar-end md:hidden'>
                <button
                    className="bg-orange-600 text-black px-4 py-2 rounded-md font-bold hover:bg-yellow-600"
                    onClick={() => window.open('https://docs.google.com/document/d/1YQDgCJmZw1Fj4LymmZd_H5k5yzpHvPvNjaBVLm-0C78/export?format=pdf', '_blank')}
                >
                    Resume
                </button>
            </div>
        </div>
    );
};

export default Navbar;


