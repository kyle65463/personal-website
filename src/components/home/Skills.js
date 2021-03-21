import React from "react";
import SkillEntry from "./SkillEntry";
import "./Skills.css";

const skillEntries = [
    {
        title: "Programming Languages",
        content: "C/C++, Python, JavaScript, Dart, ShellScript",
    },
    {
        title: "Machine Learning Frameworks",
        content: "scikit-learn, pytorch, pandas, numpy",
    },
    {
        title: "App Development",
        content: "Flutter/Dart",
    },
    {
        title: "Web Development",
        content: "HTML/CSS, JavaScript, React.js",
    },
    {
        title: "Others",
        content: "Git, Firebase",
    },
];

function Skills() {
    return (
        <section className="skills section">
            <div className="container-out">
                <h2 className="title">Skills</h2>
                <div className="container-in skills-content-in">
                    {skillEntries.map((e) => (
                        <SkillEntry title={e.title} content={e.content} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
