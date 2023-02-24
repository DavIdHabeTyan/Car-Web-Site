import './App.css';
import Header from "./components/header";
import Intro from "./components/intro";
import Info from "./components/info/info";
import Section from "./components/section/section";
import AboutSection from "./components/aboutSection";
import SectionAbout from "./components/sectionAbout";

function App() {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Info/>
            <Section/>
            <AboutSection/>
            <SectionAbout/>

            <div style={{height: '40vh'}}></div>
        </div>
    );
}

export default App;
