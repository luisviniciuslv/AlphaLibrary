import type { NextApiRequest, NextApiResponse } from "next";
import { getById } from "../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id;
  const manga = await getById(id);

  res.status(200).send(manga);
}
