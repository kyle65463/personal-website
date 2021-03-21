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
                    <h2 className="title">HI, welcome to my website!</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aut aliquid, perferendis harum aspernatur beatae
                        fuga maiores sed suscipit molestias odit illo provident.
                        Aliquam corrupti reprehenderit repellat vero ab pariatur
                        aperiam?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aut aliquid, perferendis harum aspernatur beatae
                        fuga maiores sed suscipit molestias odit illo provident.
                        Aliquam corrupti reprehenderit repellat vero ab pariatur
                        aperiam?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aut aliquid, perferendis harum aspernatur beatae
                        fuga maiores sed suscipit molestias odit illo provident.
                        Aliquam corrupti reprehenderit repellat vero ab pariatur
                        aperiam?
                    </p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Aut aliquid, perferendis harum aspernatur beatae
                        fuga maiores sed suscipit molestias odit illo provident.
                        Aliquam corrupti reprehenderit repellat vero ab pariatur
                        aperiam?
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
