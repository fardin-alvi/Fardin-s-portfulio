import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from '../assets/contactBg.jpg'
import Swal from 'sweetalert2';

const Contact = () => {

    const onSubmit = async (event) => {
        
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "b6786897-d2da-42c8-a856-3d87614d0775");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        if (data.success) {
            Swal.fire({
                title: "Submitted",
                text: "Email sent Successfully!",
                icon: "success"
            });
            event.target.reset();
        }
    };
    return (
        <div id='contact'
            className="min-h-[450px] flex justify-center items-center px-6 bg-center bg-cover bg-no-repeat bg-fixed relative"
            style={{
                backgroundImage: `url('${contactImg}')`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div data-aos="fade-up" data-aos-duration="1000" className="grid md:grid-cols-2 py-12 gap-y-10 md:gap-24 max-w-4xl w-full relative z-10 text-white">
                <form onSubmit={onSubmit} className="border border-orange-300 p-8 rounded-md bg-black bg-opacity-70">
                    <h2 className="text-lg mb-4">First Name</h2>
                    <input
                        name='name'
                        type="text"
                        placeholder="Name"
                        className="w-full mb-4 p-3 border border-orange-300 rounded-md bg-transparent text-white"
                    />
                    <h2 className="text-lg mb-4">Your Email</h2>
                    <input
                        name='email'
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 p-3 border border-orange-300 rounded-md bg-transparent text-white"
                    />
                    <h2 className="text-lg mb-4">Your Message</h2>
                    <textarea
                        name='message'
                        rows="4"
                        placeholder="Message Here"
                        className="w-full mb-4 p-3 border border-orange-300 rounded-md bg-transparent text-white"
                    ></textarea>
                    <button className="bg-orange-400 hover:bg-orange-600 text-black font-semibold w-full py-3 rounded-md">
                        SEND MESSAGE
                    </button>
                </form>

                {/* Contact Info Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mt-2">
                        Contact <span className="text-orange-500">me</span>
                    </h1>
                    <p className="text-gray-300 mt-4">
                        Hi, I'm Md Fardin Islam, a Frontend Web developer specializing in React. I work passionately as a React developer.
                    </p>
                    <div className="mt-6">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-orange-300 mr-4 text-xl" />
                            <p>Rajshahi, Bangladesh</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-orange-300 mr-4 text-xl" />
                            <p>+8801775816804</p>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-orange-300 mr-4 text-xl" />
                            <p>fardin.tecn14@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
