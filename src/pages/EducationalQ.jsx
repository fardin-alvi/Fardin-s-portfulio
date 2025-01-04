import React from 'react';
import { FaGraduationCap, FaRegCircle } from 'react-icons/fa6';
import { FaCheckCircle } from "react-icons/fa";

const EducationalQ = () => {
    return (
        <div className='min-h-[350px] bg-[#272828] p-5 md:px-24 md:py-16'>
            <div className='flex flex-col p-12 md:w-8/12 mx-auto justify-center items-center bg-base-100 bg-opacity-75 rounded-lg'>
                <h1 className="text-2xl font-bold text-black flex items-center">
                    <FaGraduationCap className="mr-2 text-orange-500" /> Education Timeline
                </h1>
                <div className="mt-6 text-center text-gray-800">
                    <p className='text-lg'>B.Sc in Textile Engineering</p>
                    <p className='text-xl'>Textile Engineering College, Noakhali</p>
                </div>
                <div className='relative mt-5'>
                    <div className='border border-1 border-green-600 w-80 md:w-96 bg-green-700'>
                    </div>
                    <div className='flex gap-x-12 justify-evenly z-10 items-center -translate-y-2'>
                        <div className='flex flex-col items-center'>
                            <FaCheckCircle />
                            <p className='text-lg font-medium'>2022</p>
                            <p className='text-sm'>GPA-3.47</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaCheckCircle />
                            <p className='text-lg font-medium'>2023</p>
                            <p className='text-sm'>CGPA-3.52</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaCheckCircle />
                            <p className='text-lg font-medium'>2024</p>
                            <p className='text-sm'>CGPA-3.56</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <FaRegCircle />
                            <p className='text-lg font-medium'>2025</p>
                            <p className='text-sm'>Not Avalable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationalQ;