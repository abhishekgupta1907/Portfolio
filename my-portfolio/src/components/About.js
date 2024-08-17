import React from "react";

const About = () => {
    return (
        <section id="about" style={styles.section}>
            <h2>About Me</h2>
            <p>
                Hi, I am [Your Name], a [Your Profession] with a passion for
                [Your Interests]. I specialize in [Your Specialization] and love
                working on projects that involve [Some Technologies or Fields].
            </p>
        </section>
    );
};

const styles = {
    section: {
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
    },
};

export default About;
