import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Intro from "./components/intro/Intro";
import Skill from "./components/skills/Skill";
import Education from "./components/EducationAndExperience/Education";
import Project from "./components/Projects/Project";
import Design from "./components/Design/Design";
import Contact from "./components/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toggle from "./components/toggle/Toggle";
import { useContext } from "react";
import { ThemeContext } from "./context";
import About from "./components/about/About";
function App() {
 
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor : darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <ToastContainer />
      <Intro />
      <About/>
      <Skill />
      <Education />
      <Project />
      <Design />
      <Contact />
    </div>
  );
}

export default App;
