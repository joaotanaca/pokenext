import { TPokemon } from "@interfaces/pokemon";
import Card from "@molecules/Card";
import Searchbar from "@molecules/Searchbar";
import React, { useMemo } from "react";

type TProps = {
    pokemons: TPokemon[];
};

const Cards: React.FC<TProps> = ({ pokemons }) => {
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
        </div>
    );
};

export default Cards;
