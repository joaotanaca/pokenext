import { TPokemon } from "@interfaces/pokemon";

export type TResponse = {
    allPokemons: TPokemon[];
    pokemons: TPokemon[];
    page: number;
    pages: number;
};

export async function getPokemons(page = 1, size = 30): Promise<TResponse> {
    const { pokemon: pokemons } = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
    ).then((r) => r.json());

    const init = size * (page - 1);
    const breakPoint = size * page;
    let pokemonsPaginated = [];

    for (let index = init; index < pokemons.length; index++) {
        if (index >= breakPoint) break;
        const pokemon = pokemons[index];
        pokemonsPaginated.push(pokemon);
    }

    return {
        allPokemons: pokemons,
        pokemons: pokemonsPaginated,
        page,
        pages: Math.ceil(pokemons.length / size),
    };
}