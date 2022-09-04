import { UserDocument } from './../model/user';
import { connectToDatabase } from "./mongoose";
import { User } from '../model/user';

export async function create(user: UserDocument) {
    await connectToDatabase();
    return new User(user).save();
  }

export async function getByUsername(username: string) {
  await connectToDatabase();
  return await User.findOne({ username }).exec();
}