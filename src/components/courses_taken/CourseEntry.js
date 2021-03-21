import React from "react";

function CourseEntry({ title, year, grade }) {
    return (
        <tr>
            <td >{title}</td>
            <td>{year}</td>
            <td>{grade}</td>
        </tr>
    );
}

export default CourseEntry;
