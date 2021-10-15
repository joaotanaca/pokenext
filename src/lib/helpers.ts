export async function getPokemons() {
    const data = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
    ).then((r) => r.json());
    return data.pokemon;
}
