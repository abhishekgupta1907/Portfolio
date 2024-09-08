import React from "react";
import "./About.css";

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <div className="about-me-container">
                <h2>About Me</h2>
                <p>
                    Hello! I'm <strong>Abhishek Gupta</strong>, a passionate
                    Full-stack MERN Developer with experience in building
                    dynamic and responsive web applications. I specialize in the
                    MERN stack (MongoDB, Express.js, React, and Node.js),
                    creating efficient backends and seamless user interfaces.
                </p>
                <p>
                    With a deep understanding of JavaScript and modern
                    frameworks, I thrive in both front-end and back-end
                    development. I'm constantly exploring new technologies to
                    expand my skills and deliver better solutions.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new tech
                    trends, contributing to open-source projects, or enjoying a
                    good cup of coffee.
                </p>
                <p>Let's build something amazing together!</p>
            </div>
        </section>
    );
};

export default AboutMe;
