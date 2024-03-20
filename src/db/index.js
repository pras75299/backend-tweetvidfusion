import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.CONNECTION_DB}/${DB_NAME}`
    );
    console.log(`Mongodb Connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("Mongodb connection error ", error);
    process.exit(1);
  }
};

export default connectDB;
