/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import { getPokemons } from "@lib/helpers";
import { TPokemon } from "@interfaces/pokemon";
import Card from "@molecules/Card";
import { useMemo } from "react";
import Cards from "src/components/organisms/Cards";

type THomeProps = {
    pokemons: TPokemon[];
};

const Home: NextPage<THomeProps> = ({ pokemons }) => {
    return (
        <div className="container mx-auto">
            <Cards pokemons={pokemons} />
        </div>
    );
};

export async function getStaticProps() {
    const pokemons = await getPokemons();
    return { props: { pokemons }, revalidate: 1 };
}

export default Home;
