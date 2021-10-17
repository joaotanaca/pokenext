/* eslint-disable react-hooks/rules-of-hooks */
import type { NextPage } from "next";
import { getPokemons, TResponse } from "@lib/helpers";
import Cards from "src/components/organisms/Cards";
import { useFetch } from "@hooks/useFetch";

type THomeProps = {
    response: TResponse;
};

const Home: NextPage<THomeProps> = ({ response }) => {
    const { data = response } = useFetch("/api/pokemons", {
        fallbackData: response,
    });
    return (
        <div className="container mx-auto">
            <Cards
                items={data.pokemons}
                pages={data.pages}
                allPokemons={data.allPokemons}
            />
        </div>
    );
};

export async function getStaticProps() {
    const response = await getPokemons();
    return { props: { response }, revalidate: 1 };
}

export default Home;
