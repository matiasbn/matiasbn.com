import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Headline from './views/Headline';

function App() {
  return (
    <div className="App">
      <Container fixed>
        <Headline />
      </Container>
    </div>
  );
}

export default App;
