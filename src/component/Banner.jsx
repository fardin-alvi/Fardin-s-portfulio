import React from 'react';
import myimage from '../assets/myImage.jpeg'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="bg-gray-800 max-h-[450px] flex items-center justify-center">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly px-10">
                <div className="text-white space-y-3 mt-5 mb-3 pl-6">
                    <h1 className="text-4xl font-bold">I'm Fardin Islam</h1>
                    <p className="text-gray-400 mb-5">
                        <span className='text-xl font-medium'>Frontend & React Developer</span> <br />
                        Reflects the core of frontend development: creating functional, user-friendly interfaces. <br />
                        And React build the website More good looking & reliable UI .
                    </p>
                    <div className='flex gap-x-5'>
                        <FaFacebook
                            className="cursor-pointer hover:text-blue-300"
                            onClick={() => window.open("https://www.facebook.com/aryan.alve.7", "_blank")}
                        />
                        <FaLinkedin
                            className="cursor-pointer hover:text-blue-300"
                            onClick={() => window.open("https://www.linkedin.com/in/md-fardin-islam", "_blank")}
                        />
                        <FaGithub
                            className="cursor-pointer hover:text-blue-300"
                            onClick={() => window.open("https://github.com/fardin-alvi", "_blank")}
                        />
                    </div>
                    <button
                        className="bg-orange-600 text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-600"
                        onClick={() => window.open('https://docs.google.com/document/d/1YQDgCJmZw1Fj4LymmZd_H5k5yzpHvPvNjaBVLm-0C78/export?format=pdf', '_blank')}
                    >
                        Resume
                    </button>
                </div>
                <div className="relative mt-5">
                    <div className="absolute -z-10  rounded-full w-72 h-72 -right-10 -top-10"></div>
                    <img
                        src={myimage}
                        alt="Michael"
                        className="w-72 h-72 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;