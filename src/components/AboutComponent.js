import React, { useState } from "react";
import "../styles/AboutComponent.css";
import photo2 from "../images/photo2.jpg";
import resumeFile from "../files/Daria'sResume.docx";
import certificateImg from "../images/certificate.jpg";

const AboutComponent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <section className="about-section bg-gradient-to-r from-purple-900 to-blue-900 bg-opacity-60 py-16" id="about" style={{
            background: "linear-gradient(to right, rgba(59, 0, 91, 0.8), rgba(13, 25, 102, 0.8))"
        }}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white bg-gradient-to-l    from-purple-500 via-pink-500 to-purple-500 rounded-full py-4 mb-8 text-center">About Me</h2>
                <div className="flex flex-col lg:flex-row items-center py-16 gap-8">
                    {/* Profile Image */}
                    <div className="lg:w-1/3 relative flex items-center justify-center">
                        <div
                            className="relative w-80 h-80 rounded-full p-[8px] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-300 animate-border"
                        >
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src={photo2}
                                    alt="Daria's profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="lg:w-2/3 text-white">
                        <p className="text-lg leading-relaxed mb-6">
                            Hi there, I'm Daria, a dedicated and creative entry-level Software Engineer with a passion for crafting innovative and user-friendly web applications. My journey began as a master in primary education, where I honed my problem-solving skills and gained a deep understanding of human behavior. This unique background now fuels my ability to design intuitive and engaging user interfaces.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Having recently completed the Springboard Software Engineering Bootcamp, I am equipped with a solid foundation in front-end development, including proficiency in CSS, HTML, JavaScript, React, and more. My bilingual skills in English and Russian enable me to collaborate effectively in diverse environments.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            I am eager to apply my technical expertise, creativity, and passion for learning to projects that push the boundaries of innovation. Let’s connect and explore how I can contribute to your team and bring value to your projects.
                        </p>

                        {/* Resume and Certificate Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href={resumeFile}
                                download="Daria'sResume.docx"
                                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 inline-flex items-center"
                            >
                                Download My Resume
                            </a>
                            <button
                                onClick={openModal}
                                className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 inline-flex items-center"
                            >
                                View Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={certificateImg}
                            alt="Certificate"
                            className="w-full h-auto rounded-lg"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-pink-500 text-white font-bold py-1 px-3 rounded-full shadow-md hover:bg-purple-600 transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutComponent;




