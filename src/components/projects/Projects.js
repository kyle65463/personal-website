import React from "react";
import "./Project.css";
import jpmemIcon from "./imgs/jpmem-icon.png";
import playStoreIcon from "./imgs/playstore.png";
import appStoreIcon from "./imgs/appstore.png";
import websiteIcon from "./imgs/website.png";

function Projects() {
    return (
        <div className="page projects">
            <h2 className="title projects-title">My Projects</h2>
            <section className="section">
                <div className="container-out">
                    <div className="container-in project-entry">
                        <div className="img-list">
                            <img
                                src={jpmemIcon}
                                alt="app icon"
                                className="project-img"
                            />

                            <div className="store-list">
                                <img
                                    src={appStoreIcon}
                                    alt="app icon"
                                    className="store"
                                />
                                <img
                                    src={playStoreIcon}
                                    alt="app icon"
                                    className="store"
                                />
                            </div>
                        </div>
                        <div className="project-description">
                            <h2 className="title no-top-margin">
                                背日文神器 - 完美結合字典與單字卡
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut aliquid, perferendis harum
                                aspernatur beatae fuga maiores sed suscipit
                                molestias odit illo provident. Aliquam corrupti
                                reprehenderit repellat vero ab pariatur aperiam?
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut aliquid, perferendis harum
                                aspernatur beatae fuga maiores sed suscipit
                                molestias odit illo provident. Aliquam corrupti
                                reprehenderit repellat vero ab pariatur aperiam?
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut aliquid, perferendis harum
                                aspernatur beatae fuga maiores sed suscipit
                                molestias odit illo provident. Aliquam corrupti
                                reprehenderit repellat vero ab pariatur aperiam?
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container-out">
                    <div className="container-in project-entry">
                        <div className="project-description">
                            <h2 className="title no-top-margin">
                                My Personal Website
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut aliquid, perferendis harum
                                aspernatur beatae fuga maiores sed suscipit
                                molestias odit illo provident. Aliquam corrupti
                                reprehenderit repellat vero ab pariatur aperiam?
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut aliquid, perferendis harum
                                aspernatur beatae fuga maiores sed suscipit
                                molestias odit illo provident. Aliquam corrupti
                                reprehenderit repellat vero ab pariatur aperiam?
                            </p>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Aut aliquid, perferendis harum
                                aspernatur beatae fuga maiores sed suscipit
                                molestias odit illo provident. Aliquam corrupti
                                reprehenderit repellat vero ab pariatur aperiam?
                            </p>
                        </div>
                        <div className="img-list">
                            <img
                                src={websiteIcon}
                                alt="app icon"
                                className="project-img"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
