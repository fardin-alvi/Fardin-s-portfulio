import React from 'react';
import ProjectCard from '../component/ProjectCard';
import projectImage1 from '../assets/project/p1.png'
import projectImage2 from '../assets/project/p2.png'
import projectImage3 from '../assets/project/p3.png'
import { Link, useParams } from 'react-router-dom';
import { list } from 'postcss';

const projects = [
    {
        id: 1,
        image: projectImage1,
        title: 'Service Review System',
        Des: 'DeckServe is a platform designed to explore different service experiences, find exclusive and customer needed services, and consult with service for get there wanted service.',
        technology: ["React", "Tailwind CSS", "MongoDB", "Firebase"],
        features: [
            "User-Friendly UI/UX design for seamless exploration.",
            "Details about each different service.",
            "Option for users to review the services.",
            "Optimized for all devices (mobile, tablet, desktop).",
            "Easily find user-needed services with search & filtered options.",
            "Easily add new services."
        ],
        livelink: 'https://deckserve.netlify.app'
    },
    {
        id: 2,
        image: projectImage2,
        title: 'Movie Portal',
        Des: 'Movie Portal is designed for users to explore and search for movie information, offering detailed movie descriptions and trailers. It provides an engaging interface for discovering various movie titles, enhancing the user experience in browsing and finding entertainment options.',
        technology: ["React", "Tailwind CSS", "MongoDB", "Firebase"],
        features:[
            "User-Friendly Interface",
            "Comprehensive Movie Listings",
            "Search Functionality",
            "Responsive Design",
            "Favorites Management",
            "Real-Time Data Updates"
        ],
        livelink:'https://movie-grid.netlify.app'
    },
    {
        id: 3,
        image: projectImage3,
        title: 'Eco Adventure',
        Des: 'Eco-Adventure Hunter is a platform designed for adventure enthusiasts to explore eco-adventure experiences, learn more about them, and consult with experts for personalized guidance.',
        technology: ["React", "Tailwind CSS", "MongoDB", "Firebase"],
        features :[
            "User-Friendly UI/UX design for seamless exploration",
            "Details about each eco-adventure experience",
            "Option for users to connect with experts",
            "Optimized for all devices (mobile, tablet, desktop)",
            "Easily find adventures based on preferences like location, difficulty, or type",
            "User data when consulting experts"
        ],
        livelink: 'https://a9-eco-adventure.netlify.app'
    },
];


const ProjectDetails = () => {

    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2 className="text-center text-white">Project not found!</h2>;
    }


    return (
        <div className='py-10 px-16'>
            <div className='border border-gray-300 bg-base-100 rounded-lg p-10 flex items-center justify-center'>
                <div className='w-[40%] flex justify-center'>
                    <img
                        className="my-4 w-80 h-96 rounded-md"
                        src={project.image}
                        alt={project.title}
                    />
                </div>
                <div className=' w-[50%]'>
                    <h2 className="text-3xl font-semibold">{project.title}</h2>
                    <p className="text-lg my-3">{project.Des}</p>
                    <div>
                        <p className='mb-2 text-lg font-medium'>Tecnology Used:</p>
                        <div className="flex flex-wrap gap-3">
                            {project.technology.map((tech, index) => (
                                <span key={index} className="bg-gray-200 text-black px-4 py-1 rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='mb-1 text-lg font-medium'>Featues:</p>
                        <ul className="list-none pl-0">
                            {project.features.map((feature, index) => (
                                <li key={index} className='my-2'>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <a
                            href={project.livelink}
                            target="_blank"
                            className='bg-orange-400 text-black px-4 py-1 rounded-lg text-center'>
                            Live Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;