import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
    ${normalize}

    * {
        font-family: sans-serif;
        box-sizing: border-box;
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body { 
        height: calc(100vh);
    }

    .root {
        height: 100%;
        background-color: #f0f8ff;
        color: #545454;
        overflow-y: scroll;
    }
    
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    a:hover {
        text-decoration: none;
    }
    
    button {
        cursor: pointer;
        border: none;
        padding: 1rem 2rem;
        text-decoration: none;
        font-size: 1.6rem;
        text-align: center;
        transition: border-color 250ms, color 250ms, transform 150ms;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    button:hover {
		transform: scale(0.99);
	}

    button:active {
		transform: scale(0.98);
	}
    
    h1 {
        font-size: 2.8rem;
    }
    
    h2 {
        font-size: 2.2rem;
    }
    
    h3 {
        font-size: 1.8rem;
    }

    p, span, div {
        font-size: 1.6rem;
    }
`;
