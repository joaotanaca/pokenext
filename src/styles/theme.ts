const typeColors = {
    rock: "#B69E31",
    ghost: "#70559B",
    steel: "#B7B9D0",
    water: "#6493EB",
    grass: "#74CB48",
    psychic: "#FB5584",
    ice: "#9AD6DF",
    dark: "#75574C",
    fairy: "#E69EAC",
    normal: "#AAA67F",
    fighting: "#C12239",
    flying: "#A891EC",
    poison: "#A43E9E",
    ground: "#DEC16B",
    bug: "#A7B723",
    fire: "#F57D31",
    eletric: "#F9CF30",
    dragon: "#7037FF",
};
const theme = {
    ...typeColors,
    darkGray: "#212121",
    mediumGray: "#666666",
    lightGray: "#E0E0E0",
    white: "#FFF",
    background: "#F7F7F7",
};

export type Theme = typeof theme;

export type PokemonColors = typeof typeColors;

export default theme;