import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGit,
    FaGithub,
    FaJava,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiMongodb,
    SiMysql,
    SiExpress,
    SiVisualstudiocode,
} from "react-icons/si";
import "./Skills.css"; // Same CSS as before

const Skills = () => {
    const frontendSkills = [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "BootStrap", icon: <FaBootstrap /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Java", icon: <FaJava /> },
    ];

    const databaseSkills = [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> },
    ];

    const toolsSkills = [
        { name: "Git", icon: <FaGit /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <SiVisualstudiocode /> },
    ];

    const renderSkills = (skills) => (
        <ul className="skills-list">
            {skills.map((skill, index) => (
                <li key={index} className="skill-item">
                    <div className="skill-icon">{skill.icon}</div>
                    <span>{skill.name}</span>
                </li>
            ))}
        </ul>
    );

    return (
        <div className="skills-section" id="skills">
            <h2>Skills</h2>

            <div className="skills-category">
                <h3>Frontend</h3>
                {renderSkills(frontendSkills)}
            </div>

            <div className="skills-category">
                <h3>Backend</h3>
                {renderSkills(backendSkills)}
            </div>

            <div className="skills-category">
                <h3>Database</h3>
                {renderSkills(databaseSkills)}
            </div>

            <div className="skills-category">
                <h3>Tools</h3>
                {renderSkills(toolsSkills)}
            </div>
        </div>
    );
};

export default Skills;
