import type { NextApiRequest, NextApiResponse } from "next";
import { getAll } from "../../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mangas = await getAll();
  mangas.sort((a, b) => b.stars - a.stars);
  res.status(200).send(mangas);
}