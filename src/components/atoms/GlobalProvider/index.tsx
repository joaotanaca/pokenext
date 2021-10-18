import React from "react";
import { ThemeProvider } from "styled-components";
import Global from "@styles/global";
import theme from "@styles/theme";
import { LazyMotion } from "framer-motion";

const loadFeatures = () => import("framer-motion").then((res) => res.domMax);

const GlobalProvider: React.FC = ({ children }) => (
    <LazyMotion features={loadFeatures}>
        <ThemeProvider theme={theme}>
            <Global />
            {children}
        </ThemeProvider>
    </LazyMotion>
);

export default GlobalProvider;
