import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-content-left">
                    <div className="navbar-logo"> Kyle</div>
                </div>
                <div className="navbar-content-right">
                    <Link to="/" className="navbar-item">
                        <div> Home </div>
                    </Link>
                    <Link to="/courses-taken" className="navbar-item">
                        <div> Courses Taken </div>
                    </Link>
                    <Link to="/projects" className="navbar-item">
                        <div> Projects</div>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
