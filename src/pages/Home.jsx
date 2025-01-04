import React, { useEffect } from 'react';
import myimage from '../assets/myImage.jpeg'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import Aboutme from '../component/Aboutme';
import Skill from './Skill';
import EducationalQ from './EducationalQ';
import Project from './Project';
import Contact from './Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

const Home = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const splitText = (text) => {
        return text.split("").map((letter, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    delay: index * 0.1,
                }}
            >
                {letter}
            </motion.span>
        ));
    };

    return (
        <div id='home'>
            <div className="bg-gray-800 min-h-[450px] flex items-center justify-center">
                <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-evenly px-10">
                    <div
                        className="text-white space-y-3 mt-5 mb-3 pl-6"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                    >
                        <h1 className="text-4xl font-bold">I'm Fardin Islam</h1>
                        <p className="text-gray-400 mb-5">
                            <span className='text-xl font-medium'>
                                {splitText("Frontend & React Developer")}
                            </span> <br />
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
                    <div className="relative mt-5 flex items-center justify-center">
                        <div className="absolute w-[340px] h-[340px] rounded-full border-[6px] border-r-transparent border-b-gray-400 border-t-transparent border-l-orange-600 animate-spin-slow"></div>
                        <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
                            <img
                                src={myimage}
                                alt="fardin"
                                className="w-full h-full object-cover"
                                data-aos="fade-left"
                                data-aos-duration="2000"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Aboutme />
            <Skill />
            <EducationalQ />
            <Project />
            <Contact/>
        </div>
    )
};

export default Home;