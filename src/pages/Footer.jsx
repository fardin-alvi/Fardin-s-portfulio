import React from 'react';
import logo from '../assets/logo/mainLogo.png'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer class="flex flex-col md:flex-row items-center justify-center bg-gray-700 text-white py-10">
            <div className='md:w-[40%] md:mr-10'>
                <img src={logo} className='w-24 mx-auto md:mx-0' alt="" />
                <p className='text-center md:text-start'>Md Fardin Islam</p>
                <p className='text-center md:text-start'>Frontend Web developer</p>
            </div>
            <nav className='pt-3'>
                <div className='flex gap-x-6'>
                    <a href='#home' class="footer-title">Home</a>
                    <a href='#project' class="footer-title">project</a>
                    <a href='#contact' class="footer-title">Contact</a>
                    <a href='#about' class="footer-title">About</a>
                </div>
                <div className="flex items-center space-x-6 pt-6 justify-center">
                    <FaFacebook
                        className="cursor-pointer size-5 hover:text-blue-300"
                        onClick={() => window.open("https://www.facebook.com/aryan.alve.7", "_blank")}
                    />
                    <FaLinkedin
                        className="cursor-pointer size-5 hover:text-blue-300"
                        onClick={() => window.open("https://www.linkedin.com/in/md-fardin-islam", "_blank")}
                    />
                    <FaGithub
                        className="cursor-pointer size-5 hover:text-blue-300"
                        onClick={() => window.open("https://github.com/fardin-alvi", "_blank")}
                    />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;