import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Skills from "./components/Skills";

import Intro from "./components/Intro/Intro";
import { themeContext } from "./context";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="App"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <Navbar />
            <div style={{ marginTop: "60px" }}>
                <Intro />
                <Skills />
                <Portfolio />
                <Contact />
            </div>
        </div>
    );
}

export default App;
