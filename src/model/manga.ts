import { connection, model, ObjectId, Schema } from "mongoose";

export interface MangaRequestDTO {
  password?: string;
  _id?: ObjectId;
  name: string;
  description: string;
  qtdPages: number;
  price: number;
  tags: string[];
  imageUrl: string;
  stars: number;
}

export interface MangaDeleteDTO {
  password?: string;
  id?: ObjectId;
}

export interface MangaDocument {
  _id?: ObjectId;
  name: string;
  description: string;
  qtdPages: number;
  price: number;
  tags: string[];
  imageUrl: string;
  stars: number;
}

export interface MangaCart extends MangaDocument {
  amount: number;
}

export const MangaSchema: Schema = new Schema<MangaDocument>({
  name: String,
  description: String,
  qtdPages: Number,
  price: Number,
  tags: [String],
  imageUrl: String, 
  stars: Number
});

const modelName: string = "Mangas";
export const MangaCreate =
  connection && connection.models[modelName]
    ? connection.models[modelName]
    : model<MangaDocument>(modelName, MangaSchema);

export const MangaGet = connection.models[modelName];