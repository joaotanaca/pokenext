import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { TPokemon } from "@interfaces/pokemon";
import { PokemonColors } from "@styles/theme";

type TContainerProps = {
    pokemonColor: PokemonColors;
};

type TProps = {
    pokemon: TPokemon;
};

const CardContainer = styled.div.attrs({
    className:
        "flex flex-col rounded-lg pt-1 col-span-6 md:col-span-4 xl:col-span-3 items-center box-border",
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
            <Image
                src={pokemon.img}
                alt={pokemon.name}
                width="100%"
                height="100%"
                layout="fixed"
            />
            <div className="pokemon-name py-1 px-2 text-md md:text-xl rounded-b-lg text-center w-full">
                {pokemon.name}
            </div>
        </CardContainer>
    );
};

export default Card;
