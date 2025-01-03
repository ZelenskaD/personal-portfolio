import React, { useState, useEffect } from "react";
import "../styles/NavBar.css";

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("home");

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
    };

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Gradient Logo */}
            <div className="logo">
                <a href="#home" className="gradient-text">
                    Surganov
                </a>
            </div>

            {/* Navigation Links */}
            <div className="nav-links">
                <a
                    href="#home"
                    onClick={() => handleSetActiveLink("home")}
                    className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                >
                    Home
                </a>
                <a
                    href="#skills"
                    onClick={() => handleSetActiveLink("skills")}
                    className={`nav-link ${activeLink === "skills" ? "active" : ""}`}
                >
                    Skills
                </a>
                <a
                    href="#projects"
                    onClick={() => handleSetActiveLink("projects")}
                    className={`nav-link ${activeLink === "projects" ? "active" : ""}`}
                >
                    Projects
                </a>
            </div>

            {/* Social Media Icons as Images */}
            <div className="social-links">
                <a
                    href="https://www.linkedin.com/in/daria-surganov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src="/images/linkedin.png"
                        alt="LinkedIn"
                        className="social-icon"
                    />
                </a>
                <a
                    href="https://www.instagram.com/_zelenska_ya_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src="/images/instagram.png"
                        alt="Instagram"
                        className="social-icon"
                    />
                </a>
                <a
                    href="https://github.com/zelenskaD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                >
                    <img
                        src="/images/github.png"
                        alt="GitHub"
                        className="social-icon"
                    />
                </a>
            </div>

            {/* Call-to-Action Button */}
            <div className="cta-button">
                <a
                    href="#contact"
                    onClick={() => handleSetActiveLink("contact")}
                    className="cta-link"
                >
                    Let’s Connect
                </a>
            </div>
        </nav>
    );
};

export default NavBar;




