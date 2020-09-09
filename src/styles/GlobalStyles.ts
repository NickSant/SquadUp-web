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
    }

    button {
        border: 0;
        background: none;
    }

    html{
        background: var(--primary-dark-blue);
    }

    :root {
        --primary-dark-blue: #04142e;
        --secondary-pink: #d916bb;
        
    }
`;