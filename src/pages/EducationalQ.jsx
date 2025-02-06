import React, { useEffect } from 'react';
import { FaGraduationCap, FaRegCircle } from 'react-icons/fa6';
import { FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationData = [
    { year: 2022, cgpa: 3.47, completed: true },
    { year: 2023, cgpa: 3.52, completed: true },
    { year: 2024, cgpa: 3.56, completed: true },
    { year: 2025, cgpa: "Not Available", completed: false }
];

const EducationalQ = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
            once: true,
        });
    }, []);

    return (
        <div className="min-h-[450px] bg-[#1e1e1e] p-5 md:px-24 md:py-16">
            <div className="flex flex-col p-12 md:w-8/12 mx-auto justify-center items-center bg-white bg-opacity-10 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-white flex items-center">
                    <FaGraduationCap className="mr-2 text-orange-400" /> Education Timeline
                </h1>
                <p className="text-lg text-gray-300 mt-2">B.Sc in Textile Engineering</p>
                <p className="text-xl text-white font-semibold">Textile Engineering College, Noakhali</p>
                <div className="relative mt-12 w-full md:w-[60%]">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-500 h-full"></div>
                    {educationData.map((edu, index) => (
                        <div
                            key={edu.year}
                            className={`relative flex items-center mb-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                            data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'} // 
                            data-aos-delay={index * 200} index
                        >
                            <div className="w-8 h-8 flex items-center justify-center rounded-full text-white text-2xl shadow-lg bg-green-500 border-4 border-white">
                                {edu.completed ? <FaCheckCircle /> : <FaRegCircle className="text-gray-400" />}
                            </div>
                            <div className={`w-40 p-2 rounded-md shadow-md ${edu.completed ? "bg-gray-800" : "bg-gray-400"} text-white`}>
                                <p className="text-lg font-bold">{edu.year}</p>
                                <p className="text-sm">CGPA: {edu.cgpa}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EducationalQ;

