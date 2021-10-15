import { useEffect, useState } from "react";

function useMobile(): boolean {
    const [mobile, setMobile] = useState<boolean>(true);
    useEffect(() => {
        const handler = () => {
            setMobile(window.innerWidth < 768);
        };
        handler();
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    return mobile;
}

export default useMobile;
