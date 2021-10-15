/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import Image from "next/image";
import { getPokemons } from "@lib/helpers";
import { useFetch } from "src/hooks/useFetch";
import { TPokemon } from "@interfaces/pokemon";

type THomeProps = {
    pokemons: TPokemon[];
};

const Home: NextPage<THomeProps> = ({ pokemons }) => {
    const { data } = useFetch<TPokemon[]>("/api/pokemons", {
        fallbackData: pokemons,
        refreshInterval: 60000,
    });

    return (
        <div className="container mx-auto">
            {data?.map((pokemon) => (
                <p key={pokemon.id}>
                    {pokemon.name}
                    <Image
                        src={pokemon.img}
                        alt=""
                        width={100}
                        height={100}
                        layout="fixed"
                    />
                </p>
            ))}
        </div>
    );
};

export async function getStaticProps() {
    const pokemons = await getPokemons();
    return { props: { pokemons }, revalidate: 1 };
}

export default Home;
