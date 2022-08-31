import { MangaNameAlreadyExistsException } from './../exceptions/manga-name-already-exists-exception';
import { MangaDocument } from './../model/manga';
import { InvalidPayloadException } from './../exceptions/invalid-payload-exception';
import { getByName } from '../repository/manga-repository';

const REQUIRED_FIELDS = [
    "name",
    "description",
    "qtdPages",
    "price",
    "tags",
    "imageUrl",
    "stars"
] 


export const validateManga = async (request: any) => {
    for (let i = 0; i< REQUIRED_FIELDS.length; i++) {
        if (!request[REQUIRED_FIELDS[i]]?.trim()) {
            throw new InvalidPayloadException(
                `Invalid payload: field ${REQUIRED_FIELDS[i]} should be informed!`
            )
        }
        if (await getByName(request.name)) {
            throw new MangaNameAlreadyExistsException(
                `Manga ${request.name} already exists!`
            )
        }
    }
}