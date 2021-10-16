import React from "react";
import { ThemeProvider } from "styled-components";
import Global from "@styles/global";
import theme from "@styles/theme";

const GlobalProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Global />
        {children}
    </ThemeProvider>
);

export default GlobalProvider;
