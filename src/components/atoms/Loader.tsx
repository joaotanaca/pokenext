import React from "react";
import Icon from "./icons";

const Loader: React.FC = () => {
    return (
        <div className="animate-pulse w-full h-full flex items-center justify-center">
            <Icon className="animate-spin" name="pokeball" size={32}/>
        </div>
    );
};

export default Loader;
