import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div style={{ marginTop: "60px" }}>
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    );
}

export default App;
