import React from 'react';
import ProjectCard from '../component/ProjectCard';
import projectImage11 from '../assets/project/p11.png';
import projectImage12 from '../assets/project/p12.png';
import projectImage13 from '../assets/project/p13.png';
import projectImage21 from '../assets/project/p21.png';
import projectImage22 from '../assets/project/p22.png';
import projectImage23 from '../assets/project/p23.png';
import projectImage31 from '../assets/project/p31.png';
import projectImage32 from '../assets/project/p32.png';
import projectImage33 from '../assets/project/p33.png';

const Project = () => {
    const projects = [
        {
            id:1,
            image: [projectImage11, projectImage12,projectImage13],
            title: "Service Review System",
            Des: 'DeckServe is a platform designed to explore different service experiences, find exclusive and customer needed services, and consult with service for get there wanted service.'
        },
        {
            id:2,
            image: [projectImage21,projectImage22, projectImage23],
            title: "Movie Portal",
            Des: 'Movie Portal is designed for users to explore and search for movie information, offering detailed movie descriptions and trailers. It provides an engaging interface for discovering various movie titles, enhancing the user experience in browsing and finding entertainment options.'
        },
        {
            id:3,
            image: [projectImage31, projectImage32, projectImage33],
            title: "BunkInn",
            Des: 'A Hostel Management system for a university, enabling administrators to manage student meals and food and reviews , students can easily get information about their food on daily.'
        }
    ]
    return (
        <div id='project' className='bg-gray-800 p-8'>
            <div className='text-center text-white '>
                <h2 className='text-4xl font-semibold object-cover'>Projects</h2>
            </div>
            <div className='grid grid-col-1 md:grid-cols-3 gap-4 w-10/12 mx-auto my-5'>
                {
                    projects.map(project=><ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>
            
        </div>
    );
};

export default Project;