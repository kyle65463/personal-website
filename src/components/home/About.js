import React from "react";
import Avatar from "@material-ui/core/Avatar";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./About.css";

function About() {
    return (
        <section className="about">
            <div className="about-content">
                <div className="about-content-left">
                    <Avatar className="about-avatar" />
                    <h2 className="about-name">朱瑞斌 (Kyle)</h2>
                    <div className="about-info">
                        <MailIcon className="about-icon" />
                        <GitHubIcon />
                    </div>
                </div>
                <div className="about-content-mid-padding"></div>
                <div className="about-content-right">
                    <h2 className="title">Hi, welcome to my personal website!</h2>
                    <p>
                    My name is Kyle. I am a sophomore studying computer science at National Taiwan University (NTU) currently.
                    </p>
                    <p>
                    I have a great passion for software-related techniques, including many different fields, 
                    such as machine learning, system programming, network management, web development, app development, and so on, 
                    most of them are learned by myself. 
                    I like to explore and pick up new skills in my free time, facing different challenges.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
