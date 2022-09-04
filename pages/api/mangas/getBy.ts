import type { NextApiRequest, NextApiResponse } from "next";
import { getAll } from "../../../src/repository/manga-repository";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name = req.query.name ? req.query.name.toString() : ""
  const gender = req.query.gender;
  const mangas = await getAll();

  const filteredMangas = mangas.filter(manga => 
    (name !== '' ? manga.name.toLowerCase().includes(name.toLowerCase()) : true) && (gender !== '' ? manga.tags.includes(gender) : true)
  )

  res.status(200).send(filteredMangas);
}
