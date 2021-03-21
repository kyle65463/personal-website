import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-content-left">
                    <div className="navbar-logo"> Kyle</div>
                </div>
                <div className="navbar-content-right">
                    <div className="navbar-item"> Home </div>
                    <div className="navbar-item"> Courses Taken </div>
                    <div className="navbar-item"> Projects</div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
