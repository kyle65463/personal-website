import React from "react";
import "./Project.css";
import jpmemIcon from "./img/jpmem-icon.png";
import playStoreIcon from "./img/playstore.png";
import appStoreIcon from "./img/appstore.png";
import websiteIcon from "./img/website.png";
import GitHubIcon from "@material-ui/icons/GitHub";

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
                                <a href="https://apps.apple.com/app/背日文神器-完美結合字典與單字卡/id1550577799">
                                    <img
                                        src={appStoreIcon}
                                        alt="app icon"
                                        className="store"
                                    />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.kyle65463.japanese_memorizer">
                                    <img
                                        src={playStoreIcon}
                                        alt="app icon"
                                        className="store"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="project-description">
                            <h2 className="title no-top-margin">
                                Japanese Memorizer
                            </h2>
                            <p>
                                "Japanese Memorizer" is an application that
                                combines a dictionary and flashcards. When
                                looking up a word, you can create a custom
                                flashcard according to your preferences. It can
                                not only display the kana and kanjis separately
                                but also mark the accent of the word, which is a
                                critical part when memorizing Japanese words.
                                Moreover, after creating some flashcards, you
                                can take various types of quizzes to help you
                                remember words firmly!
                            </p>
                            <p>
                                With the simple interface and various functions,
                                this app is definitely the best Japanese
                                vocabulary app you have ever used!
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
                                My personal website, literally, the one you are
                                reading right now.
                            </p>
                            <p>
                                It's my first try building a website with
                                javascript and react.js, using github page to
                                host it. The website only contains a few logics,
                                so the main challenge is to style it and host
                                properly. Since I didn't use any CSS framework,
                                all styling stuff are coded in CSS stylesheet
                                directly by myself.
                            </p>
                        </div>
                        <div className="img-list">
                            <img
                                src={websiteIcon}
                                alt="app icon"
                                className="project-img"
                            />
                            <div className="store-list">
                                <a href="https://github.com/kyle65463/personal-website">
                                    <GitHubIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
