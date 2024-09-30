import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

// to checek this code
export const connectToDataBase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URL) throw new Error("Missing database URL");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URL, {
      dbName: "craftify-ai",
      bufferCommands: false,
    });
};
