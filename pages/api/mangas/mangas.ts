import type { NextApiRequest, NextApiResponse } from "next";
import { getAll } from "../../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const manga = await getAll();
  res.status(200).send(manga);
}
