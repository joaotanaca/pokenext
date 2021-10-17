import { getPokemons } from "@lib/helpers";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
    _request: NextApiRequest,
    response: NextApiResponse,
) {
    const data = await getPokemons();
    return response.status(200).json(data);
}
