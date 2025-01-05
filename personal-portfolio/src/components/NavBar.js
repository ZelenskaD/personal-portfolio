import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";
import navIcon1 from "../images/nav-icon1.png";
import navIcon2 from "../images/git6.png";
import navIcon3 from "../images/nav-icon3.png";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav
            className={`navbar fixed top-0 left-0 w-full z-50 ${
                scrolled ? "bg-blue-800 shadow-lg" : "bg-gradient-to-r from-purple-800 to-blue-600"
            }`}
        >
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <a href="#home" className="gradient-text-logo text-4xl font-extrabold">
                    Surganov
                </a>

                {/* Hamburger Icon */}
                <div
                    className="hamburger md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <span className="block w-8 h-1 bg-white my-1 transition-transform"></span>
                    <span className="block w-8 h-1 bg-white my-1 transition-transform"></span>
                    <span className="block w-8 h-1 bg-white my-1 transition-transform"></span>
                </div>

                {/* Navigation Links */}
                <div
                    className={`menu-links ${
                        isMenuOpen ? "block" : "hidden"
                    } md:flex md:items-center md:space-x-6 bg-blue-900 md:bg-transparent w-full md:w-auto px-4 md:pl-16`}
                >
                    <div className="nav-links flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 py-4 md:py-0">
                        <a href="#about" className="nav-link text-white">
                            About
                        </a>
                        <a href="#skills" className="nav-link text-white">
                            Skills
                        </a>
                        <a href="#projects" className="nav-link text-white">
                            Projects
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div
                        className="flex flex-col md:flex-row md:justify-end md:space-x-4 space-y-2 md:space-y-0 py-4 md:py-0">
                        <a
                            href="https://www.linkedin.com/in/daria-surganov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon bg-pink-500 hover:bg-pink-600 p-2 rounded-full"
                        >
                            <img src={navIcon1} alt="LinkedIn" className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://www.instagram.com/_zelenska_ya_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon bg-purple-500 hover:bg-purple-600 p-2 rounded-full"
                        >
                            <img src={navIcon3} alt="Instagram" className="w-5 h-5"/>
                        </a>
                        <a
                            href="https://github.com/zelenskaD"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon bg-white hover:bg-blue-600 p-2 rounded-full"
                        >
                            <img src={navIcon2} alt="GitHub" className="w-5 h-5"/>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;












