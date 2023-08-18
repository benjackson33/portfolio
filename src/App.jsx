import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import IconBar from "./components/IconBar";
import Skills from "./components/Skill";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <IconBar />
      <div>
        <Nav />

        <div className="intro">
          <Intro />
        </div>

        <div className="about">
          <hr className="hr-about" style={{ width: "15%" }} />
          <About />
        </div>

        <div className="projects">
          <hr className="hr-project" style={{ width: "30%" }} />
          <Projects />
        </div>

        <div className="skills">
          <hr className="hr-skills" style={{ width: "45%" }} />
          <Skills />
        </div>

        <div className="footer">
          <hr className="hr-footer" style={{ width: "85%" }} />
          <Footer />
        </div>

      </div>
    </>
  );
}

export default App;
