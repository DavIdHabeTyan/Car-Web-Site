import './App.css';
import './media.css';
import Header from "./components/header";
import Intro from "./components/intro";
import Info from "./components/info/info";
import Section from "./components/section/section";
import AboutSection from "./components/aboutSection";
import SectionAbout from "./components/sectionAbout";
import Contacts from "./components/contacts";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Info/>
            <Section/>
            <AboutSection/>
            <SectionAbout/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
