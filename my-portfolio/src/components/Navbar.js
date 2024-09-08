import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav style={styles.navbar} className="bg-blue-300 flex justify-between">
            <h1 className="ml-16 text-4xl">Abhishek Gupta Portfolio</h1>
            <div className="mr-24 mt-2 text-lg">
                <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    style={styles.link}
                >
                    About
                </Link>
                <Link
                    to="skills"
                    smooth={true}
                    duration={500}
                    style={styles.link}
                >
                    Skills
                </Link>
                <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    style={styles.link}
                >
                    Projects
                </Link>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    style={styles.link}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "10px 0",
        zIndex: 1000,
    },
    link: {
        color: "#fff",
        margin: "0 15px",
        cursor: "pointer",
        textDecoration: "none",
    },
};

export default Navbar;
