import type { NextApiRequest, NextApiResponse } from "next";
import { getById } from "../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id;
  if (id) {
    try {
      const manga = await getById(id);
      res.status(200).send(manga);
      return;
    } catch (err) {
      res.status(404).send("Manga not found");
      return;
    }
  }
  res.status(400).send("Bad request");
}
