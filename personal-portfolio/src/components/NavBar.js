import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import navIcon1 from "../images/nav-icon1.png";
import navIcon2 from "../images/git6.png";
import navIcon3 from "../images/nav-icon3.png";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
    const [isSocialOpen, setIsSocialOpen] = useState(false); // State for social icons toggler

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleSetActiveLink = (link) => {
        setActiveLink(link);
        setIsMenuOpen(false); // Close menu after clicking a link
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggles the hamburger menu
    };

    const toggleSocialIcons = () => {
        setIsSocialOpen(!isSocialOpen); // Toggles social icons
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""} bg-gradient-to-r from-purple-800 to-blue-600 shadow-lg`}>
            <div className="container flex items-center justify-between px-4 py-3">
                {/* Gradient Logo */}
                <a href="#home" className="gradient-text text-xl font-bold">
                    Surganov
                </a>

                {/* Hamburger Menu Icon */}
                <div
                    className="hamburger md:hidden cursor-pointer ml-auto"
                    onClick={toggleMenu}
                >
                    <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
                    <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
                    <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
                </div>
            </div>

            {/* Navigation Links & Social Media Icons */}
            <div
                className={`menu-links ${isMenuOpen ? "block" : "hidden"} md:flex md:items-center md:space-x-6 bg-purple-900 md:bg-transparent w-full md:w-auto px-4 md:px-0`}
            >
                <div className="nav-links flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 py-4 md:py-0">
                    <a
                        href="#about"
                        onClick={() => handleSetActiveLink("about")}
                        className={`nav-link text-white ${
                            activeLink === "about" ? "font-semibold underline" : ""
                        }`}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        onClick={() => handleSetActiveLink("skills")}
                        className={`nav-link text-white ${
                            activeLink === "skills" ? "font-semibold underline" : ""
                        }`}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        onClick={() => handleSetActiveLink("projects")}
                        className={`nav-link text-white ${
                            activeLink === "projects" ? "font-semibold underline" : ""
                        }`}
                    >
                        Projects
                    </a>
                </div>

                {/* Social Media Icons Toggler */}
                <div className="social-icons-toggler md:hidden cursor-pointer py-3" onClick={toggleSocialIcons}>
                    <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
                    <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
                </div>

                {/* Social Media Icons */}
                <div
                    className={`social-links flex-col md:flex-row md:space-x-4 ${
                        isSocialOpen ? "flex" : "hidden"
                    } md:flex justify-center space-y-4 md:space-y-0 py-4 md:py-0`}
                >
                    <div className="social-icon">
                        <a
                            href="https://www.linkedin.com/in/daria-surganov"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={navIcon1} alt="LinkedIn" />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a
                            href="https://www.instagram.com/_zelenska_ya_"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={navIcon3} alt="Instagram" />
                        </a>
                    </div>
                    <div className="social-icon">
                        <a
                            href="https://github.com/zelenskaD"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={navIcon2} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;








