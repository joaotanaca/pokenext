import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { TPokemon } from "@interfaces/pokemon";
import { PokemonColors } from "@styles/theme";
import Image from "@atoms/Image";

type TContainerProps = {
    pokemonColor: PokemonColors;
};

type TProps = {
    pokemon: TPokemon;
};

const CardContainer = styled.div.attrs({
    className:
        "flex flex-col rounded-lg pt-1 col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 items-center box-border",
})<TContainerProps>`
    border: 2px solid ${({ pokemonColor, theme }) => theme[pokemonColor]};
    color: ${({ pokemonColor, theme }) => theme[pokemonColor]};
    .pokemon-name {
        background-color: ${({ pokemonColor, theme }) => theme[pokemonColor]};
        color: ${({ theme }) => theme.white};
    }
`;

const Card: React.FC<TProps> = ({ pokemon }) => {
    return (
        <CardContainer pokemonColor={pokemon.type[0]}>
            <p className="text-right px-2 w-full">#{pokemon.num}</p>
            <div className="w-full h-36">
                <Image img={pokemon.img} alt={pokemon.name} />
            </div>
            <div className="pokemon-name py-1 px-2 text-md md:text-xl text-center w-full">
                {pokemon.name}
            </div>
        </CardContainer>
    );
};

export default Card;
