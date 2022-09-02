import { MangaNameAlreadyExistsException } from '../exceptions/manga-name-already-exists-exception';
import { InvalidPayloadException } from '../exceptions/invalid-payload-exception';
import { getByName } from '../repository/manga-repository';
import { getByUsername } from '../repository/user-repository';

const MANGA_REQUIRED_FIELDS = [
    "name",
    "description",
    "qtdPages",
    "price",
    "tags",
    "imageUrl",
    "stars"
] 

const USER_REQUIRED_FIELDS = [
    "username",
    "email",
    "password",
    "passwordConfirmation"
]

export const validateManga = async (request: any) => {
    for (let i = 0; i < MANGA_REQUIRED_FIELDS.length; i++) {
        if (!request[MANGA_REQUIRED_FIELDS[i]]?.trim()) {
            throw new InvalidPayloadException(
                `Invalid payload: field ${MANGA_REQUIRED_FIELDS[i]} should be informed!`
            )
        }
        if (await getByName(request.name)) {
            throw new MangaNameAlreadyExistsException(
                `Manga ${request.name} already exists!`
            )
        }
    }
}

export const validateUser = async (request: any) => {
    for (let i = 0; i < USER_REQUIRED_FIELDS.length; i++) {
        if (!request[USER_REQUIRED_FIELDS[i]]?.trim()) {
            throw new InvalidPayloadException(
                `Invalid payload: field ${USER_REQUIRED_FIELDS[i]} should be informed!`
            )
        }
        if(request.password !== request.passwordConfirmation) {
            throw new InvalidPayloadException(
                `Invalid payload: password and password confirmation should be equals!`
            )
        }
        if (await getByUsername(request.username)) {
            throw new InvalidPayloadException(
                `username "${request.username}" already exists!`
            )
        }
    }
}
