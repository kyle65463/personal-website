import React from "react";
import EducationEntry from "./EducationEntry";
import "./Education.css";

const eduEntries = [
    {
        title: "Bachelor in Computer Science and Information Engineering",
        subtitle: "National Taiwan University",
        time: "Sep, 2019 - May, 2023 (expected)",
    },

    {
        title: "Senior high school",
        subtitle:
            "The Affiliated Senior High School of National Taiwan Normal University",
        time: "Sep, 2016 - May, 2019",
    },
];

const expEntries = [
    {
        title: "Network Administration Intern",
        subtitle: "NTU CSIE Department",
        time: "Mar, 2021 - now",
    },
];

function Education() {
    return (
        <section className="edu-exp section">
            <div className="container-out">
                <div className="education-content-in">
                    <section className="education">
                        <h2 className="title"> Education</h2>
                        <ul>
                            {eduEntries.map((e) => (
                                <EducationEntry
                                    title={e.title}
                                    subtitle={e.subtitle}
                                    time={e.time}
                                />
                            ))}
                        </ul>
                    </section>
                    <section className="experience">
                        <h2 className="title">Experience</h2>
                        <ul>
                            {expEntries.map((e) => (
                                <EducationEntry
                                    title={e.title}
                                    subtitle={e.subtitle}
                                    time={e.time}
                                />
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Education;
