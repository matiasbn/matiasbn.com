import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
      font-size: 62.5%;
    }
    body{
        position: relative;
        margin: 0 auto;
        padding: 0rem;
        font-family: 'MuseoModerno';
    }
    * {
      box-sizing: border-box;
    }
`;
