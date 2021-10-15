import React, { HTMLAttributes, useMemo } from "react";
import source, { TIcon } from "./source";

type TProps = TIcon &
    HTMLAttributes<SVGAElement> & {
        name: keyof typeof source;
    };

const Icon: React.FC<TProps> = ({
    name,
    color = "#212121",
    size = 24,
    ...props
}) => {
    const Component = useMemo(() => source[name], [name]);
    return <Component size={size} color={color} {...props} />;
};

export default Icon;
