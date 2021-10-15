import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior: smooth;
        font-family: 'Open Sans', sans-serif;
    }
    body{
        background-color: ${({ theme }) => theme.background};
    }
`;
