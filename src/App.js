import './App.css';
import Header from "./components/header";
import Intro from "./components/intro";
import Info from "./components/info/info";
import Section from "./components/section/section";

function App() {
    return (
        <div className="App">
            <Header/>
            <Intro/>
            <Info/>
            <Section/>

        </div>
    );
}

export default App;
