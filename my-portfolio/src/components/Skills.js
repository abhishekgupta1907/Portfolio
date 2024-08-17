import React from "react";

const Skills = () => {
    return (
        <section id="skills" style={styles.section}>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Skills
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <li className="bg-white p-4 rounded shadow">React.js</li>
                <li className="bg-white p-4 rounded shadow">
                    JavaScript (ES6+)
                </li>
                <li className="bg-white p-4 rounded shodaw">HTML & CSS</li>
                <li className="bg-white p-4 rounded shadow">Tailwind CSS</li>
                <li className="bg-white p-4 rounded shadow">Git & GitHub</li>
                <li className="bg-white p-4 rounded shadow">DSA</li>
                <li className="bg-white p-4 rounded shadow">Bootstrap</li>
                <li className="bg-white p-4 rounded shadow">Java(core)</li>
            </ul>
        </section>
    );
};

const styles = {
    section: {
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: "#e2e2e2",
    },
};

export default Skills;
