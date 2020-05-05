import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const resumeLink = 'https://drive.google.com/file/d/1lDM4vqUX0f1XhINEpUZ7TzkFKGAjdhzB/view?usp=sharing';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This page is under construction :).
          <br />
          You can refer to my Resume by clicking
          <a href={resumeLink}> here</a>
        </p>
      </header>
    </div>
  );
}

export default App;
