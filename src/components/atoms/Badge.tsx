import { PokemonColors } from "@styles/theme";
import React from "react";
import styled from "styled-components";

type TProps = {
    type: PokemonColors;
};

const BadgeContainer = styled.div.attrs({
    className: "px-2 py-1 rounded-3xl font-bold",
})<TProps>`
    background-color: ${({ theme, type }) => theme[type]};
    color: ${({ theme }) => theme.white};
    width: min-content;
`;

const Badge: React.FC<TProps> = (props) => {
    return <BadgeContainer {...props}>{props.type}</BadgeContainer>;
};

export default Badge;
