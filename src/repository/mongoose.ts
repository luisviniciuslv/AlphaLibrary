import { connect } from "mongoose";

export async function connectToDatabase() {
    await connect(
      "mongodb+srv://viinilv:perigo17@cluster0.rmlvs.mongodb.net/?retryWrites=true&w=majority"
    );
  }