import React from "react";
import "./Projects.css"; // Optional: for custom styling

const Projects = () => {
    const projectData = [
        {
            name: "Food Ordering Website",
            description:
                "A fully responsive food ordering website built using the MERN stack.",
            githubLink: "https://github.com/abhishekgupta1907/FOOD-WEBSITE",
        },
        {
            name: "E-Commerce Website",
            description:
                "An e-commerce platform with dynamic product pages, user authentication, and order management.",
            githubLink:
                "https://github.com/abhishekgupta1907/E-commerce-Website",
        },
        {
            name: "Personal Portfolio",
            description:
                "A personal portfolio website showcasing my skills, experience, and projects.",
            githubLink: "https://github.com/abhishekgupta1907/Portfolio",
        },
        {
            name: "Simple Blog Website",
            description:
                "A simple blog website where users can read and post blogs, with full CRUD functionality.",
            githubLink: "https://github.com/abhishekgupta1907/Blog-Website",
        },
    ];

    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-list">
                    {projectData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
