import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html{
        scroll-behavior: smooth;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    body{
        background-color: ${({ theme }) => theme.background};
    }
`;
