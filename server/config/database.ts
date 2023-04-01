import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not set.");
}

const dburi: string = process.env.MONGODB_URI;

function connect() {
  const db = mongoose
    .connect(dburi)
    .then(() => {
      console.log("Connected to DB successfully");
    })
    .catch((err) => {
      console.error(`Connection Failed: ${err}`);
      process.exit(1);
    });

  return db;
}

export default connect;
