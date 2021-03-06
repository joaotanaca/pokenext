import { PokemonColors } from "@styles/theme";

export type TPokemon = {
    id: number;
    num: string;
    name: string;
    img: string;
    type: PokemonColors[];
    height: string;
    weight: string;
    candy: string;
    candy_count: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: number;
    spawn_time: string;
    multipliers: number[];
    weaknesses: PokemonColors[];
    next_evolution: {
        num: string;
        name: string;
    }[];
};
