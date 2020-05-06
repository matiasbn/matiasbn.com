import React from 'react';
import { Grid } from '@material-ui/core';

export default function Headline() {
  const resumeLink = 'https://drive.google.com/file/d/1lDM4vqUX0f1XhINEpUZ7TzkFKGAjdhzB/view?usp=sharing';
  const repoLink = 'https://github.com/matiasbn/matiasbn.com';
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <header className="App-header">
        <h2 className="App-header-title">
          Computers Engineer, Full Stack Developer and Blockchain Mentor.
        </h2>
        <h3 className="App-header-subtitle">
          I design and create digital products, and i love what i do.
        </h3>
        <p>
          You can see my Resume by clicking
          {' '}
          <a href={resumeLink}>here</a>
        </p>
        <p>
          You can see the code source of this page here
          {' '}
          <a href={repoLink}>here</a>
        </p>
      </header>
    </Grid>
  );
}
