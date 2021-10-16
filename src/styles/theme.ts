const typeColors = {
    Rock: "#B69E31",
    Ghost: "#70559B",
    Steel: "#B7B9D0",
    Water: "#6493EB",
    Grass: "#74CB48",
    Psychic: "#FB5584",
    Ice: "#9AD6DF",
    Dark: "#75574C",
    Fairy: "#E69EAC",
    Normal: "#AAA67F",
    Fighting: "#C12239",
    Flying: "#A891EC",
    Poison: "#A43E9E",
    Ground: "#DEC16B",
    Bug: "#A7B723",
    Fire: "#F57D31",
    Electric: "#F9CF30",
    Dragon: "#7037FF",
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

export type PokemonColors = keyof typeof typeColors;

export default theme;
