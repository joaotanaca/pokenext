/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import { getPokemons, TResponse } from "@lib/helpers";
import { TPokemon } from "@interfaces/pokemon";
import Cards from "src/components/organisms/Cards";

type THomeProps = {
    response: TResponse;
};

const Home: NextPage<THomeProps> = ({ response }) => {
    return (
        <div className="container mx-auto">
            <Cards
                items={response.pokemons}
                pages={response.pages}
                allPokemons={response.allPokemons}
            />
        </div>
    );
};

export async function getStaticProps() {
    const response = await getPokemons();
    return { props: { response }, revalidate: 1 };
}

export default Home;
