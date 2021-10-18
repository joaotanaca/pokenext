import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

import { TPokemon } from "@interfaces/pokemon";
import { PokemonColors } from "@styles/theme";
import Image from "@atoms/Image";
import { motion } from "framer-motion";

type TContainerProps = {
    pokemonColor: PokemonColors;
};

type TProps = {
    pokemon: TPokemon;
    onOpen: (arg: number) => void;
};

const CardContainer = styled(motion.div).attrs({
    className:
        "flex flex-col rounded-lg pt-1 col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2 items-center box-border cursor-pointer",
})<TContainerProps>`
    border: 2px solid ${({ pokemonColor, theme }) => theme[pokemonColor]};
    color: ${({ pokemonColor, theme }) => theme[pokemonColor]};
    .pokemon-name {
        background-color: ${({ pokemonColor, theme }) => theme[pokemonColor]};
        color: ${({ theme }) => theme.white};
    }
`;

const Card: React.FC<TProps> = ({ pokemon, onOpen }) => {
    return (
        <CardContainer
            layoutId={`modal-container-${pokemon.id}`}
            onClick={() => onOpen(pokemon.id)}
            pokemonColor={pokemon.type[0]}
        >
            <motion.p
                layoutId={`modal-num-${pokemon.id}`}
                className="text-right px-2 w-full"
            >
                #{pokemon.num}
            </motion.p>
            <motion.div
                className="w-full h-36"
                layoutId={`modal-image-${pokemon.id}`}
            >
                <Image img={pokemon.img} alt={pokemon.name} />
            </motion.div>
            <motion.div
                className="pokemon-name py-1 px-2 text-md md:text-xl text-center w-full"
                layoutId={`modal-title-${pokemon.id}`}
            >
                {pokemon.name}
            </motion.div>
        </CardContainer>
    );
};

export default Card;
