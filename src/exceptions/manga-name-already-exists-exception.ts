export class MangaNameAlreadyExistsException extends Error {
    constructor(message: string) {
      super(message);
      this.name = "InvalidMangaNameException";
    }
  }
  