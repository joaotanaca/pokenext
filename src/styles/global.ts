import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior: smooth;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: ${({ theme }) => theme.background};
    }
`;
