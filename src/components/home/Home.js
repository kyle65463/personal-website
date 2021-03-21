import React from "react";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";

function Home() {
    return (
        <div className="home">
            <About />
            <Education />
            <Skills />
        </div>
    );
}

export default Home;
