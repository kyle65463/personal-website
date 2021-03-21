import React from "react";

function SkillEntry({ title, content }) {
    return (
        <div className="skill-entry">
            <div className="skill-entry-title"> {title} </div>
            <div className="skill-entry-content"> {content} </div>
        </div>
    );
}

export default SkillEntry;
