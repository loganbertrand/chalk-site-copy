import { createGlobalStyle } from "styled-components"



// Export global styles
export default createGlobalStyle`
    html, body {
        margin: 0 !important;
        padding: 0;
        width: 100%;
        box-sizing: border-box;
        font-family: 'Montserrat'; 
        z-index: 1;
        @media (min-width: 768px) {
            overflow-x: hidden;
            -ms-overflow-style: none;
            overflow: -moz-scrollbars-none;
            &::-webkit-scrollbar { width: 0 !important }
        }
        @media (max-width: 767px) {
            overflow-x: hidden;
        }
    }
    

    .form::before {
        opacity: 1;
    }

    
    .landing {
        display: table;
        table-layout: fixed;
        width: 100%;
    }


    .formButton {
        animation: bgfade 800ms ease-in;
        animation-fill-mode: forwards;
    }

    

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
    }
`
