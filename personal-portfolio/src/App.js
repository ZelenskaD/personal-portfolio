import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import SkillsComponent from './components/SkillsComponent';
import ProjectsComponent from './components/ProjectsComponent';
import Background from './components/background';
import MouseShine from "./components/MouseShine";
import AboutComponent from "./components/AboutComponent";

function App() {
    return (
        <div className="relative">
            <Background />
            <MouseShine />

            <div className="relative z-10">
                <NavBar />
                <Banner />
                <AboutComponent/>
                <SkillsComponent />
                <ProjectsComponent />
            </div>
        </div>
    );
}

export default App;



