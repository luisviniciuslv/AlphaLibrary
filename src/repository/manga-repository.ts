import { connect } from "mongoose";
import { MangaDocument, MangaGet } from "../model/manga";
import { connectToDatabase } from "./mongoose";


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
