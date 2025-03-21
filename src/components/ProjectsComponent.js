import React, { useState } from "react";
import "../styles/ProjectsComponent.css";
import portfolio1 from "../images/portfolio1.png";
import portfolio2 from "../images/portfolio2.png";
import nyxisMain from "../images/nyxisMain.png";
import nyxisMobile from "../images/nyxisMobile.png";
import blades from "../images/blades.png";
// import Background from "../components/background";
import prototype1 from "../images/prototype1.png";
import prototype2 from "../images/prototype2.png";



const projects = [
    {
        title: "Prototype of Mobile App for Whiskey Store",
        images: [prototype1, prototype2],
        description:
            "The mobile high-fidelity prototype displays an elegant whiskey shopping experience with a sophisticated design aesthetic. The app features a luxurious gold and marble-inspired color scheme that perfectly complements the premium whiskey products. The design effectively communicates luxury through its consistent visual language, typography choices, and photography style, making it appealing to whiskey enthusiasts and collectors. The user flow is intuitive and focused on showcasing the premium nature of the products while maintaining a smooth purchasing experience.",
        url: "https://www.figma.com/design/YbsvExCWWKczy6hUwQOkSX/Surganov-Whiskey-V1?node-id=58-200&m=dev&t=AP87XDkNOGqLHRLL-1",
    },
    {
        title: "Portfolio Website",
        images: [portfolio1, portfolio2],
        description: "A personal portfolio to showcase my work and skills.",
        url: "https://daria.surganov.dev",
    },
    {
        title: "Nyxis - E-commerce Makeup Shop",
        images: [nyxisMain, nyxisMobile],
        description:
            "Nyxis is a sleek and modern makeup shop application designed to provide users with an elegant and personalized shopping experience. Built using React for the frontend and integrated with the Makeup API, Nyxis allows users to explore a wide variety of beauty products, create personalized profiles, and enjoy a seamless shopping journey.",
        url: "https://nyxis.surganov.dev/",
    },
    {
        title: "Blades in the Dark Platform",
        images: [blades],
        description:
            "The Blades in the Dark Portal is a web application designed to enhance the gaming experience for players of the 'Blades in the Dark' tabletop role-playing game. This portal serves as a comprehensive platform where players can manage their campaigns, create and edit characters, and organize gameplay sessions.",
        url: "https://blades-portal.surganov.dev/",
    },
];

const ProjectsComponent = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 bg-opacity-80 py-16 mt-16" id="projects" style={{
            background: "linear-gradient(to right, rgba(59, 0, 91, 0.8), rgba(13, 25, 102, 0.8))"
        }}>
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-8 py-4 text-center bg-gradient-to-l from-purple-500 via-pink-500 to-purple-500 rounded-full">Projects</h2>
                <div className="space-y-12 py-16">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="project-card flex flex-col lg:flex-row custom-card-bg p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            {/* Images */}
                            <div className="flex lg:w-1/2 space-x-4 overflow-x-scroll">
                                {project.images.map((image, i) => (
                                    <img
                                        key={i}
                                        src={image}
                                        alt={`${project.title} screenshot ${i + 1}`}
                                        className="rounded-md w-80 h-48 object-cover cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
                                        onClick={() => openModal(image)}
                                    />
                                ))}
                            </div>
                            {/* Description */}
                            <div className="lg:w-1/2 mt-6 lg:mt-0 lg:ml-6">
                                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                {index === 0 ? (
                                    <a
                                        href="https://www.figma.com/proto/YbsvExCWWKczy6hUwQOkSX/Surganov-Whiskey-V1?node-id=58-200&t=AP87XDkNOGqLHRLL-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 inline-block"
                                    >
                                        View Interactive Prototype
                                    </a>
                                ) : (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 inline-block"
                                    >
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal
                    >
                        <img
                            src={selectedImage}
                            alt="Modal"
                            className="rounded-lg w-full h-auto mb-4 max-h-[80vh]" // Increased max height for larger screens
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-pink-500 text-white font-bold text-sm py-1 px-2 rounded-full shadow-md hover:bg-purple-600 transition-all"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsComponent;