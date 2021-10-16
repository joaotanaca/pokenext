import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TPokemon } from "@interfaces/pokemon";
import Card from "@molecules/Card";
import Searchbar from "@molecules/Searchbar";
import { getPokemons } from "@lib/helpers";
import Icon from "@atoms/icons";

type TProps = {
    items: TPokemon[];
    pages: number;
};

const Cards: React.FC<TProps> = ({ items }) => {
    const [pokemons, setPokemons] = useState(items);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);

    const morePokemons = useCallback(async () => {
        setLoading(true);
        const { pokemons } = await getPokemons(page);
        setPokemons((prev) => [...prev, ...pokemons]);
        setPage(page + 1);
        setLoading(false);
    }, [page]);

    const renderCards = useMemo(
        () =>
            pokemons?.map((pokemon) => (
                <Card key={pokemon.id} pokemon={pokemon} />
            )),
        [pokemons],
    );

    return (
        <div className="grid grid-cols-12 gap-4 md:gap-4 px-4 md:px-12 my-4">
            <Searchbar />
            {renderCards}
            <div className="col-span-12 flex justify-center">
                <button className="flex" onClick={morePokemons}>
                    Mais pokemons{" "}
                    {loading && (
                        <Icon name="pokeball" className="animate-spin" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Cards;
