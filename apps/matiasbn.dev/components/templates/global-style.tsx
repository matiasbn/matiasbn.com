import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
      font-size: 62.5%;
    }
    body{
        position: relative;
        margin: 0 auto;
        padding: 0;
        font-family: 'MuseoModerno';
        height: 100vh;
        width: 100vw;
    }
    * {
      box-sizing: border-box;
    }
`;
