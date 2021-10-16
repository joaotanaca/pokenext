import React from "react";
import styled from "styled-components";
import Icon from "./icons";

const LogoContainer = styled.div.attrs({ className: "col-span-3 flex gap-4 items-center" })`
    color: ${({ theme }) => theme.darkGray};
`;

const Logo: React.FC = () => {
    return (
        <LogoContainer>
            <Icon name="pokeball" size={32} />
            <p className="text-xl font-bold">
                Pokedex
            </p>
        </LogoContainer>
    );
};

export default Logo;
