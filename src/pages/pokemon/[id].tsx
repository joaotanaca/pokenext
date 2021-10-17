import React from "react";
import { GetStaticPropsContext } from "next";
import { getPokemon, getPokemons } from "@lib/helpers";
import { TPokemon } from "@interfaces/pokemon";

type TProps = {
    pokemon: TPokemon;
    id: string;
};

const Pokemon: React.FC<TProps> = ({ pokemon, id }) => {
    return (
        <>
            {pokemon.name}
            {id}
        </>
    );
};

export async function getStaticProps(
    context: GetStaticPropsContext<{ id: string }>,
) {
    const id = context?.params?.id;
    const pokemon = await getPokemon(Number(id));

    if (!pokemon.id) {
        return {
            notFound: true,
        };
    }

    return {
        props: { pokemon, id },
    };
}

export async function getStaticPaths() {
    const { allPokemons } = await getPokemons();
    const paths = allPokemons.map((pokemon) => ({
        params: { id: `${pokemon.id}` },
    }));

    return { paths, fallback: "blocking" };
}

export default Pokemon;
