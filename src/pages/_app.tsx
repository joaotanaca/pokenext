import type { AppProps } from "next/app";
import GlobalProvider from "@atoms/GlobalProvider";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <GlobalProvider>
            <Component {...pageProps} />
        </GlobalProvider>
    );
}
export default MyApp;
