import { connect } from "mongoose";
import { MangaDocument, MangaGet } from "../model/manga";

async function connectToDatabase() {
  await connect(
    "mongodb+srv://viinilv:perigo17@cluster0.rmlvs.mongodb.net/?retryWrites=true&w=majority"
  );
}

export async function create(manga: MangaDocument) {
  await connectToDatabase();
  return new MangaGet(manga).save();
}

export async function getByName(name: string) {
  await connectToDatabase();
  return await MangaGet.findOne({ name }).exec();
}

export async function getById(id: any) {
  await connectToDatabase();
  return await MangaGet.findById(id).exec();
}

export async function getAll() {
  await connectToDatabase();
  return await MangaGet.find().exec();
}

export async function deleteManga(id: any) {
  await connectToDatabase();
  return await MangaGet.findByIdAndDelete(id).exec();
}
