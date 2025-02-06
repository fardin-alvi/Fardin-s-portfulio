import React from 'react';

import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {
    return (
        <div className="max-w-sm mx-auto border border-gray-100 rounded-lg shadow-md overflow-hidden group">
            <img
                className="h-64 w-full object-cover group-hover:scale-110"
                src={project.image[0]}
                alt='project'
            />
            <div className="px-5 py-3 flex bg-transparent  gap-y-2 flex-col justify-start items-start">
                <h2 className="text-xl font-bold text-white">{project.title}</h2>
                <p className="text-base text-white">{project.Des.substring(0, 50)}...</p>
                <div className='my-2'>
                    <Link to={`/project/${project.id}`} className='bg-orange-400 hover:bg-orange-700 text-white font-semibold py-1 px-4 rounded-md'>See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;