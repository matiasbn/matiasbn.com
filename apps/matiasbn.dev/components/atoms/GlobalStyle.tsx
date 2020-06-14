import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        position: relative;
        margin: 0 auto;
        padding: 0px;
        width: 100vw;
        height: 100vh;
        font-family: 'MuseoModerno';
    }

    * {
        box-sizing: border-box;
    }
`;
