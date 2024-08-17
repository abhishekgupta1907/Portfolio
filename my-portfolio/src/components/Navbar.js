import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <Link to="about" smooth={true} duration={500} style={styles.link}>
                About
            </Link>
            <Link to="skills" smooth={true} duration={500} style={styles.link}>
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
            <Link to="contact" smooth={true} duration={500} style={styles.link}>
                Contact
            </Link>
        </nav>
    );
};

const styles = {
    navbar: {
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "blue",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "centre",
        padding: "10px 0",
        zIndex: 1000,
    },
    link: {
        color: "#fff",
        margin: "0 15px",
        cursor: "pointer",
        textDecoration: "none",
        marginTop: "15px",
    },
};

export default Navbar;
