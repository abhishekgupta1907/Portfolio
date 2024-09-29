import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Skills from "./components/Skills";

import Intro from "./components/Intro/Intro";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div style={{ marginTop: "60px" }}>
                <Intro />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
