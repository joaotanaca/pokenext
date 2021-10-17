import { getPokemon } from "@lib/helpers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
    request: NextApiRequest,
    response: NextApiResponse,
) {
    const { id } = request.query;
    const pokemon = await getPokemon(Number(id));
    return response.status(200).json(pokemon);
}
