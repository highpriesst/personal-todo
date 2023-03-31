import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dburi = "mongodb://localhost:27017/TodoCluster";

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
