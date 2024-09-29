import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../context";
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
        githubLink: "https://github.com/abhishekgupta1907/E-commerce-Website",
    },
    {
        name: "Personal Portfolio",
        description:
            "A personal portfolio website showcasing my skills, experience, and projects.",
        githubLink: "https://github.com/abhishekgupta1907/Portfolio",
    },
    {
        name: "Blog Website",
        description:
            "A simple blog website where users can read and post blogs, with full CRUD functionality.",
        githubLink: "https://github.com/abhishekgupta1907/Blog-Website",
    },
];
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="projects">
            {/* heading */}
            <span style={{ color: darkMode ? "white" : "" }}>
                Recent Projects
            </span>
            <span>Links</span>

            {/* slider */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className="portfolio-slider"
            >
                {projectData.map((project, index) => (
                    <SwiperSlide key={index}>
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
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Portfolio;
