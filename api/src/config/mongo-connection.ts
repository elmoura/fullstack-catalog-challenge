import mongoose from "mongoose";
import { envConfig } from "./env";

export const connectToDatabase = async () => {
  await mongoose.connect(envConfig.mongoUrl);

  console.log("Connected to MongoDB.");
};
