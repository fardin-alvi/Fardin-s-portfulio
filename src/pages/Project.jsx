import React from 'react';
import ProjectCard from '../component/ProjectCard';
import projectImage1 from '../assets/project/p1.png'
import projectImage2 from '../assets/project/p2.png'
import projectImage3 from '../assets/project/p3.png'

const Project = () => {
    const projects = [
        {
            id:1,
            image: projectImage1,
            title: "Service Review System",
            Des: 'DeckServe is a platform designed to explore different service experiences, find exclusive and customer needed services, and consult with service for get there wanted service.'
        },
        {
            id:2,
            image: projectImage2,
            title: "Movie Portal",
            Des: 'Movie Portal is designed for users to explore and search for movie information, offering detailed movie descriptions and trailers. It provides an engaging interface for discovering various movie titles, enhancing the user experience in browsing and finding entertainment options.'
        },
        {
            id:3,
            image: projectImage3,
            title: "Eco Adventure",
            Des: 'Eco-Adventure Hunter is a platform designed for adventure enthusiasts to explore eco-adventure experiences, learn more about them, and consult with experts for personalized guidance.'
        }
    ]
    return (
        <div id='project' className='bg-gray-800 p-8'>
            <div className='text-center text-white '>
                <h2 className='text-2xl font-semibold object-cover'>Projects</h2>
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