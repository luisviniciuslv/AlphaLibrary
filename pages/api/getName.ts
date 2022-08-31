import type { NextApiRequest, NextApiResponse } from "next";
import { getByName } from "../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.body.name;

  const manga = await getByName(name);

  res.status(200).send(manga);
}
