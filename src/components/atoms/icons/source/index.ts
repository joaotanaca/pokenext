/* eslint-disable import/no-anonymous-default-export */
import { HTMLAttributes } from "react";
import ArrowDown from "./svg/arrow-down";
import ArrowLeft from "./svg/arrow-left";
import ArrowRight from "./svg/arrow-right";
import Height from "./svg/height";
import Pokeball from "./svg/pokeball";
import Search from "./svg/search";
import Weight from "./svg/weight";

export default {
    "arrow-left": ArrowLeft,
    "arrow-right": ArrowRight,
    "arrow-down": ArrowDown,
    height: Height,
    pokeball: Pokeball,
    search: Search,
    weight: Weight,
};

export type TIcon = HTMLAttributes<SVGSVGElement> & {
    color?: string;
    size?: number;
};
