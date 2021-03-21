import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home/Home";
import CoursesTaken from "./components/courses_taken/CoursesTaken";
import Projects from "./components/projects/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return (
        <Router basename={ process.env.PUBLIC_URL }>
            <div className="App">
                <Navbar />
                    <Route path="/" exact component={Home} />
                    <Route path="/courses-taken" exact component={CoursesTaken} />
                    <Route path="/projects" exact component={Projects} />
            </div>
        </Router>
    );
}

export default App;
