import React, { useState } from "react";
import ContactForm from "./ContactForm";
import headerImg from "../images/header-img.svg";

export const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <section className="banner bg-gradient-to-r py-60 mt-16" id="home">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                {/* Banner Content */}
                <div className="lg:w-7/12 text-center lg:text-left">
                    <span className="block text-lg font-semibold uppercase mb-2">
                        Welcome to my Portfolio
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                        Hi! I'm Daria <br />
                        <span className="txt-rotate text-pink-400">
                            <span className="wrap">Web Developer</span>
                        </span>
                    </h1>
                    <p className="text-sm md:text-base mb-6">
                        With a passion for building user-friendly web applications. Known
                        for crafting engaging user interfaces and solving complex
                        technical challenges with precision and efficiency.
                    </p>
                    <button
                        onClick={openModal}
                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center"
                    >
                        Let’s Connect
                    </button>
                </div>

                {/* Image Section with Animation */}
                <div className="lg:w-5/12 mt-8 lg:mt-0 flex justify-center">
                    <img
                        src={headerImg}
                        alt="Header Img"
                        className="w-full max-w-sm lg:max-w-md animate-rectangular-motion"
                    />
                </div>
            </div>

            {/* Contact Form Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-2 right-2 bg-pink-500 text-white font-bold py-1 px-2 rounded-full shadow-md hover:bg-purple-600 transition-all"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <ContactForm />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Banner;







