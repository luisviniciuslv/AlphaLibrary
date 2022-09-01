import type { NextApiRequest, NextApiResponse } from "next";
import { MangaDeleteDTO, MangaDocument } from "../../src/model/manga";
import { deleteManga } from "../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const manga: MangaDeleteDTO = req.body;

  if (manga.password !== "perigo17") {
    res.status(401).send("Unauthorized");
    return;
  }

  const id = manga.id;

  if (id) {
    try {
      const manga: MangaDocument = await deleteManga(id);
      res.status(200).send(`${manga.name} deleted`);
      return;
    } catch (err) {
      res.status(404).send("Manga not found");
      return;
    }
  }
  res.status(400).send("Bad request");
}
