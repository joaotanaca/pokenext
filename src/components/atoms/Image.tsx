import React, { useState } from "react";
import NextImage from "next/image";
import useMobile from "@hooks/useMobile";
import Loader from "./Loader";

type ObjectFit = NonNullable<
    JSX.IntrinsicElements["img"]["style"]
>["objectFit"];

type TProps = {
    img: string;
    alt: string;
    quality?: { mobile?: string; desktop?: string };
    objectFit?: {
        mobile?: ObjectFit;
        desktop?: ObjectFit;
    };
};

const Image: React.FC<TProps> = ({
    img,
    alt,
    quality = { mobile: "50", desktop: "90" },
    objectFit = { mobile: "contain", desktop: "scale-down" },
}) => {
    const [loading, setLoading] = useState(true);
    const mobile = useMobile();
    return (
        <div className="w-full h-full relative">
            {loading && <Loader />}
            <NextImage
                quality={mobile ? quality.mobile : quality.desktop}
                loading="lazy"
                src={img}
                alt={alt}
                layout="fill"
                objectFit={mobile ? objectFit.mobile : objectFit.desktop}
                onLoadingComplete={() => setLoading(false)}
            />
        </div>
    );
};

export default Image;
