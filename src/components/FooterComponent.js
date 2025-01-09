import React from "react";
import navIcon1 from "../images/nav-icon1.png"; // LinkedIn Icon
import navIcon2 from "../images/git6.png"; // GitHub Icon
import navIcon3 from "../images/nav-icon3.png"; // Instagram Icon

const FooterComponent = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-800 text-white py-6">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                {/* Left Section */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Daria Surganov. All rights reserved.
                    </p>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4">
                    <a
                        href="https://www.linkedin.com/in/daria-surganov"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon bg-pink-500 hover:bg-pink-600 p-2 rounded-full"
                    >
                        <img src={navIcon1} alt="LinkedIn" className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/_zelenska_ya_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon bg-purple-500 hover:bg-purple-600 p-2 rounded-full"
                    >
                        <img src={navIcon3} alt="Instagram" className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/zelenskaD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon bg-white hover:bg-blue-600 p-2 rounded-full"
                    >
                        <img src={navIcon2} alt="GitHub" className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;

