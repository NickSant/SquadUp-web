import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        max-height: 100vh;
        max-width: 100vw;
        height: 100%;
        width: 100%;

        font-family: Roboto, sans-serif;
        text-decoration: none;
    }

    button {
        border: 0;
        background: none;
        cursor: pointer;
        font-family: Montserrat, sans-serif;
    }

    html{
        background: var(--primary-dark-blue);
    }

    :root {
        --primary-dark-blue: #04142e;
        --primary-lighter-blue: #061e45;
        --secondary-pink: #d916bb;
        --text-white: #ffffff;
        
    }
`;