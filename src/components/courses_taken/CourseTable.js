import React from "react";
import CourseEntry from "./CourseEntry";

function CourseTable({entries}) {
    return (
        <table className="course-table">
            <tr>
                <td className="header-course">Course</td>
                <td className="header-year">Year</td>
                <td className="header-grade">Grade</td>
            </tr>
            {entries.map((e) => (
                <CourseEntry title={e.title} year={e.year} grade={e.grade} />
            ))}
        </table>
    );
}

export default CourseTable;
