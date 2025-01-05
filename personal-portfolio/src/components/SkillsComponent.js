import React from "react";
import "../styles/SkillsComponent.css";
import Background from "../components/background";

const skills = [
    { name: "JavaScript", icon: require("../images/js.png"), description: "Programming Language" },
    { name: "React", icon: require("../images/react.png"), description: "Frontend Framework" },
    { name: "Node.js", icon: require("../images/node.png"), description: "Backend Development" },
    { name: "Python", icon: require("../images/python.png"), description: "Backend Development" },
    { name: "HTML", icon: require("../images/html.png"), description: "Markup Language" },
    { name: "CSS", icon: require("../images/css.png"), description: "Styling" },
    { name: "Tailwind CSS", icon: require("../images/tailwind.png"), description: "Utility-First CSS" },
    { name: "Bootstrap", icon: require("../images/bootstrap.png"), description: "Frontend Framework" },
];


const SkillsComponent = () => {
    return (
        <section className="relative py-16" id="skills">
            {/* Transparent gradient background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r  opacity-80"></div>

            {/* Content with relative positioning to stay above the overlay */}
            <div className="relative container mx-auto px-6 text-center ">
                <h2 className="text-3xl font-bold text-white mb-8  bg-gradient-to-l    from-purple-500 via-pink-500 to-purple-500 rounded-full  ">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-16 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-card p-4 bg-white/10 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="mx-auto w-16 h-16 mb-4"
                            />
                            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                            <p className="text-sm text-gray-300">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default SkillsComponent;
