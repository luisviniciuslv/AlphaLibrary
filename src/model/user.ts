import { connection, model, ObjectId, Schema } from "mongoose";
export interface UserRequestDTO {
  username: String;
  email: String;
  password: String;
  passwordConfirmation: String;
}

export interface UserDocument {
  _id: ObjectId;
  username: String;
  email: String;
  password: String;
  orders: Object[];
}

export const userToDocument = (dto: UserRequestDTO): UserDocument => {
  const user = {
    username: dto.username,
    email: dto.email,
    password: dto.password,
  } as UserDocument;
  return user;
};

export const UserSchema: Schema = new Schema<UserDocument>({
  username: String,
  email: String,
  password: String,
  orders: [Object],
});

const modelName: string = "Users";

export const User = connection.models[modelName];
