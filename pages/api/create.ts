import { validateManga } from './../../src/validations/user-creation';
import type { NextApiRequest, NextApiResponse } from "next";
import { MangaRequestDTO } from "../../src/model/manga";
import { create } from "../../src/repository/manga-repository";
import { InvalidPayloadException } from '../../src/exceptions/invalid-payload-exception';
import { MangaNameAlreadyExistsException } from '../../src/exceptions/manga-name-already-exists-exception';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const manga: MangaRequestDTO = req.body

  if (manga.password !== "perigo17") {
    res.status(401).send("Unauthorized");
    return;
  }

  try {
    delete manga.password
    await validateManga(manga)
    const persistedManga = await create(manga);
    res.status(201).send(`persisted in api/manga/?id=${persistedManga._id}`);
  } catch (error) {

    if (error instanceof InvalidPayloadException) {
      res.status(400).send(error.message);
    }

    if (error instanceof MangaNameAlreadyExistsException) {
      res.status(400).send(error.message);
    }

    else {
      res.status(500).send("Internal server error");
    }
  }
}
