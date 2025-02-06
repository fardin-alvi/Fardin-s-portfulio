import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import myimage from '../assets/myImage.jpeg'
const Aboutme = () => {
    return (
        <div id='about' className='min-h-[400px] bg-[#1e1e1e] p-5 md:p-20'>
            <div className='flex p-16 md:justify-between md:gap-x-8 lg:justify-center items-center bg-white bg-opacity-20 rounded-lg'>
                <div className='md:w-[40%] hidden md:flex'>
                    <div className='relative flex justify-center'>
                        <div className="absolute top-4 left-4 w-72 h-96 border-4 border-orange-500 rounded-tl-3xl rounded-br-3xl"></div>
                        <img className='relative z-10 rounded-tl-3xl rounded-br-3xl h-96 w-72 object-cover' data-aos="fade-right" data-aos-duration="1000" src={myimage} alt="" />
                    </div>
                </div>
                <div className='md:w-[50%] w-full'>
                    <div className="p-6">
                        <h2 className="text-4xl font-bold text-gray-800">ABOUT <span className='text-orange-500'>ME</span></h2>
                        <h3 className="text-lg text-pink-600 mt-4">Md Fardin Islam - Frontend Web Developer</h3>
                        <p className="text-white mt-4">
                            Driven by passion and guided by determination, I embarked on my programming journey to turn my love for technology into a skill. Overcoming challenges along the way, I have worked tirelessly to grow not only learn but also my commitment to continuous improvement and creativity. <br />
                            Beyond coding, I find joy in traveling and connecting with diverse cultures, as well as engaging in voluntary work that enriches my perspective and gives back to the community.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6 pb-6 px-6">
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
                </div>
            </div>

        </div>
    );
};

export default Aboutme;