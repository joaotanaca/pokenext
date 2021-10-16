import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TPokemon } from "@interfaces/pokemon";
import Card from "@molecules/Card";
import Searchbar from "@molecules/Searchbar";
import { getPokemons } from "@lib/helpers";
import Icon from "@atoms/icons";
import Button from "@atoms/Button";

type TProps = {
    items: TPokemon[];
    pages: number;
    allPokemons: TPokemon[];
};

const Cards: React.FC<TProps> = ({ items, pages, allPokemons }) => {
    const [pokemons, setPokemons] = useState(items);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [_sort, setSort] = useState<"high" | "low">("low");
    const [page, setPage] = useState(1);

    const morePokemons = useCallback(async () => {
        setLoading(true);
        const { pokemons } = await getPokemons(page + 1);
        setPokemons((prev) => [...prev, ...pokemons]);
        setPage(page + 1);
        setLoading(false);
    }, [page]);

    const handleSortNumbers = useCallback(
        (a: TPokemon, b: TPokemon) => {
            if (_sort === "low") {
                if (Number(a.num) < Number(b.num)) return 1;

                if (Number(a.num) > Number(b.num)) return -1;
            } else {
                if (Number(a.num) > Number(b.num)) return 1;

                if (Number(a.num) < Number(b.num)) return -1;
            }

            return 0;
        },
        [_sort],
    );

    const handleFilterPokemons = useCallback(
        (pokemon: TPokemon) => {
            if (
                pokemon.name.toLowerCase().includes(search) ||
                pokemon.num.toLowerCase().includes(search)
            ) {
                return <Card key={pokemon.id} pokemon={pokemon} />;
            } else {
                return null;
            }
        },
        [search],
    );

    const renderCards = useMemo(
        () =>
            search
                ? allPokemons?.sort(handleSortNumbers).map(handleFilterPokemons)
                : pokemons
                      ?.sort(handleSortNumbers)
                      .map((pokemon) => (
                          <Card key={pokemon.id} pokemon={pokemon} />
                      )),
        [
            allPokemons,
            handleFilterPokemons,
            handleSortNumbers,
            pokemons,
            search,
        ],
    );

    return (
        <div className="grid grid-cols-12 gap-4 md:gap-4 px-4 md:px-6 xl:px-12 my-4">
            <Searchbar />
            {renderCards}
            {!search && (
                <div className="col-span-12 flex justify-center">
                    {page === pages ? (
                        <p>Parece que chegou ao final da pokedex!</p>
                    ) : (
                        <Button
                            className="flex justify-center w-full"
                            onClick={morePokemons}
                        >
                            Mais pokemons{" "}
                            {loading && (
                                <Icon
                                    name="pokeball"
                                    className="animate-spin ml-2"
                                />
                            )}
                        </Button>
                    )}
                </div>
            )}
        </div>
    );
};

export default Cards;
