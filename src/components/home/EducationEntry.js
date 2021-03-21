import React from "react";

function EducationEntry({ title, subtitle, time }) {
    return (
        <li className="edu-entry">
            <div className="edu-entry-title">{title}</div>
            <div className="edu-entry-subtitle">{subtitle}</div>
            <div className="edu-entry-time">{time}</div>
        </li>
    );
}

export default EducationEntry;
