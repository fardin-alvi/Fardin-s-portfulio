import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaGithub, FaArrowLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'
import projectImage11 from '../assets/project/p11.png';
import projectImage12 from '../assets/project/p12.png';
import projectImage13 from '../assets/project/p13.png';
import projectImage21 from '../assets/project/p21.png';
import projectImage22 from '../assets/project/p22.png';
import projectImage23 from '../assets/project/p23.png';
import projectImage31 from '../assets/project/p31.png';
import projectImage32 from '../assets/project/p32.png';
import projectImage33 from '../assets/project/p33.png';

const projects = [
    {
        id: 1,
        image: [projectImage11, projectImage12,projectImage13],
        title: 'Service Review System',
        Des: 'DeckServe is a platform designed to explore different service experiences, find exclusive and customer-needed services, and consult with service providers to get the desired service.',
        technology: ["React","Express JS","Tailwind CSS","Axios","MongoDB", "Firebase"],
        features: [
            "User-Friendly UI/UX design for seamless exploration.",
            "Details about each different service.",
            "Option for users to review the services.",
            "Optimized for all devices (mobile, tablet, desktop).",
            "Easily find user-needed services with search & filtered options.",
            "Easily add new services."
        ],
        challenges: [
            "Balancing functionality with performance.",
            "Run site can be challenging, especially with multiple contributors.",
            "Implementing effective SEO strategies to ensure visibility.",
            "More accurate category and implement be hard."
        ],
        improvement: [
            "Add User & admin specific dashboard",
            "More secure API integration",
            "Validation and filtering data for adding services",
            "Easy payment system for users to get services"
        ],
        livelink: 'https://deckserve.netlify.app',
        gitRepo: "https://github.com/fardin-alvi/service-review-system"
    },
    {
        id: 2,
        image: [projectImage21,projectImage22, projectImage23],
        title: 'Movie Portal',
        Des: 'Movie Portal is designed for users to explore and search for movie information, offering detailed movie descriptions and trailers. It provides an engaging interface for discovering various movie titles, enhancing the user experience in browsing and finding entertainment options.',
        technology: ["React","Express JS","Tailwind CSS","Framer Motion","MongoDB","Firebase"],
        features: [
            "User-Friendly Interface",
            "Comprehensive Movie Listings",
            "Search Functionality",
            "Responsive Design",
            "Favorites Management",
            "Real-Time Data Updates"
        ],
        challenges: [
            "Choosing the right technology stack can be difficult.",
            "Challenging to maintain a consistent design and user experience.",
            "Managing and updating dynamic content can be complex.",
            "Keeping the project on track can be difficult."
        ],
        improvement: [
            "Add User & admin specific dashboard",
            "More secure API integration",
            "Validation and filtering data can be more strictly enforced",
            "Directly associate with OTT platforms"
        ],
        livelink: 'https://movie-grid.netlify.app',
        gitRepo: "https://github.com/fardin-alvi/movie-orchid"
    },
    {
        id: 3,
        image: [projectImage31, projectImage32, projectImage33],
        title: 'BunkInn',
        Des: 'A Hostel Management system for a university, enabling administrators to manage student meals and food reviews. Students can easily get information about their food on a daily basis.',
        technology: ["React","Express JS","Tailwind CSS", "MongoDB", "Firebase","Axios","Stripe JS"],
        features: [
            "Secure login for students and admins.",
            "Students can explore different meals and their information.",
            "Students can leave likes and delete food reviews.",
            "Exclusive features available on subscription.",
            "User-friendly payment gateway.",
            "Admins can manage student details efficiently.",
            "Dedicated module for meal management by admins.",
            "Dashboard for monitoring hostel activities.",
            "Easily access all student records.",
        ],
        challenges: [
            "Ensuring fast load times and responsive interactions is vital.",
            "Keeping user data safe and blocking unauthorized access are crucial.",
            "Making sure the app works the same on all browsers and devices.",
            "Choosing the right payment gateway is tough."
        ],
        improvement: [
            "Adding more secure levels.",
            "Give more options for payment.",
            "Adding real-time notifications.",
            "Implement a system for users to provide feedback easily."
        ],
        livelink: 'https://bunkinn-41df5.web.app',
        gitRepo: "https://github.com/fardin-alvi/hostel-meal-management-client"
    },
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return <h2 className="text-center text-white">Project not found!</h2>;
    }

    return (
        <div className='min-h-screen bg-gray-900 py-10 px-4 sm:px-6 lg:px-8'>
            <div className="max-w-7xl mx-auto">
                <Link
                    to={'/'}
                    className='inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300'
                >
                    <FaArrowLeft className="mr-2" /> Back
                </Link>

                <div className='mt-4 bg-transparent border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-all'>
                    <div className='relative'>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            className="w-full h-96"
                        >
                            {project.image.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        className="w-full h-full object-cover rounded-lg"
                                        src={img}
                                        alt={`Project ${index + 1}`}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='p-6'>
                        <div className='flex justify-between items-center'>
                            <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <a
                                    href={project.livelink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition duration-300'
                                >
                                    Live Link
                                </a>
                                <a
                                    href={project.gitRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300'
                                >
                                    <FaGithub className="mr-2" /> Repository
                                </a>
                            </div>
                        </div>
                        <p className="text-lg text-gray-300 mb-6">{project.Des}</p>

                        <div className='mb-6'>
                            <h3 className='text-xl font-semibold text-white mb-3'>Technology Used:</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technology.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className='grid grid-cols-12'>
                            <div className='mb-6 col-span-5'>
                                <h3 className='text-xl font-semibold text-white mb-3'>Features:</h3>
                                <ul className="list-disc pl-5 text-gray-300">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className='mb-2'>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mb-6 col-span-7'>
                                <h3 className='text-xl font-semibold text-white mb-3'>Improvements:</h3>
                                <ul className="list-disc pl-5 text-gray-300">
                                    {project.improvement.map((improvement, index) => (
                                        <li key={index} className='mb-2'>{improvement}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h3 className='text-xl font-semibold text-white mb-3'>Challenges:</h3>
                            <ul className="list-disc pl-5 text-gray-300">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className='mb-2'>{challenge}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;