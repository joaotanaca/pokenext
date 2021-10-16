/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Image from "next/image";
import { getPokemons } from "@lib/helpers";
import { useFetch } from "src/hooks/useFetch";
import { TPokemon } from "@interfaces/pokemon";
import Card from "@organisms/Card";
import { useMemo } from "react";

type THomeProps = {
    pokemons: TPokemon[];
};

const Home: NextPage<THomeProps> = ({ pokemons }) => {
    const renderCards = useMemo(
        () =>
            pokemons?.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            )),
        [pokemons],
    );

    return (
        <div className="container mx-auto grid grid-cols-12 gap-2 md:gap-4 px-4 md:px-12">
            {renderCards}
        </div>
    );
};

export async function getStaticProps() {
    const pokemons = await getPokemons();
    return { props: { pokemons }, revalidate: 1 };
}

export default Home;
