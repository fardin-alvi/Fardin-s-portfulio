import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skill = () => {
    return (
        <div className="bg-gray-800 text-white py-10">
            <div className="container mx-auto text-center" data-aos="zoom-in-up" data-aos-duration="1000">
                <h2 className="text-4xl font-bold mb-12">My Skills</h2>
                <div className="flex justify-center items-center flex-col md:flex-row gap-16">
                    <div className="text-center">
                        <FaHtml5 className="mx-auto text-5xl text-orange-600" />
                        <h3 className="text-xl font-semibold mt-4">HTML</h3>
                    </div>
                    <div className="text-center">
                        <FaCss3Alt className="mx-auto text-5xl text-blue-600" />
                        <h3 className="text-xl font-semibold mt-4">CSS</h3>
                    </div>
                    <div className="text-center">
                        <FaJs className="mx-auto text-5xl text-yellow-400" />
                        <h3 className="text-xl font-semibold mt-4">JavaScript</h3>
                    </div>
                    <div className="text-center">
                        <FaReact className="mx-auto text-5xl text-cyan-400" />
                        <h3 className="text-xl font-semibold mt-4">React</h3>
                    </div>
                    <div className="text-center">
                        <SiMongodb className="mx-auto text-5xl text-green-600" />
                        <h3 className="text-xl font-semibold mt-4">MongoDB</h3>
                    </div>
                    <div className="text-center">
                        <SiTailwindcss className="mx-auto text-5xl text-blue-400" />
                        <h3 className="text-xl font-semibold mt-4">Tailwind CSS</h3>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;



