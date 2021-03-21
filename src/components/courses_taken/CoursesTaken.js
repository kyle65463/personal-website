import React from "react";
import CourseTable from "./CourseTable";
import "./CoursesTaken.css";

const csEntries = [
    { title: "計算機程式設計", year: "2019 Fall", grade: "A+" },
    { title: "資料結構與演算法", year: "2020 Spring", grade: "A" },
    { title: "網路管理與系統管理", year: "2020 Spring", grade: "A-" },
    { title: "演算法設計與分析", year: "2020 Fall", grade: "A" },
    { title: "系統程式設計", year: "2020 Fall", grade: "A+" },
    { title: "機器學習基石", year: "2020 Fall", grade: "A" },
    { title: "機器學習技法", year: "2020 Fall", grade: "A+" },
    { title: "基礎物件導向程式設計", year: "2021 Spring", grade: "Taking" },
    { title: "作業系統", year: "2021 Spring", grade: "Taking" },
    { title: "進階網路管理與系統管理", year: "2021 Spring", grade: "Taking" },
    { title: "深度學習之應用", year: "2021 Spring", grade: "Taking" },
    { title: "機器學習", year: "2021 Spring", grade: "Taking" },
];

const mathEntries = [
    { title: "微積分甲上", year: "2019 Fall", grade: "A" },
    { title: "微積分甲下", year: "2020 Spring", grade: "A" },
    { title: "離散數學", year: "2020 Spring", grade: "A+" },
    { title: "線性代數", year: "2020 Fall", grade: "A+" },
    { title: "機率", year: "2021 Spring", grade: "Taking" },
];

const otherEntries = [
    { title: "普通物理學上", year: "2019 Fall", grade: "A+" },
    { title: "普通物理學下", year: "2020 Spring", grade: "A+" },
];

function CoursesTaken() {
    return (
        <div className="page">
            <h2 className="title courses-taken-title"> Courses Taken</h2>
            <section className="section">
                <div className="container-out">
                    <h2 className="title"> CS related</h2>
                    <CourseTable entries={csEntries} />
                </div>
            </section>
            <section className="section">
                <div className="container-out">
                    <h2 className="title"> Math related</h2>
                    <CourseTable entries={mathEntries} />
                </div>
            </section>
            <section className="section">
                <div className="container-out">
                    <h2 className="title"> Others</h2>
                    <CourseTable entries={otherEntries} />
                </div>
            </section>
        </div>
    );
}

export default CoursesTaken;
