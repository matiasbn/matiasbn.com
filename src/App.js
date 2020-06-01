import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const resumeLink =
    "https://drive.google.com/file/d/1szHiZKK7u-pqogYJb2VJDVU08lF_p--6/view?usp=sharing";
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-header-title">
          Computers Engineer, Full Stack Developer and Blockchain Mentor.
        </h2>
        <h3 className="App-header-subtitle">
          I design and create digital products, and i love what i do.
        </h3>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          You can see my Resume by clicking <a href={resumeLink}>here</a>
        </p>
      </header>
    </div>
  );
}

export default App;
