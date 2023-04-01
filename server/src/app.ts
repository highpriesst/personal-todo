import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotevn from "dotenv";
import bodyParser from "body-parser";
import connect from "../config/database";
import router from "../routes/todo.route";

dotevn.config();
const app: Application = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use(router);

app.listen(PORT, async (): Promise<void> => {
  console.log(`Server is listening on PORT:${PORT}`);

  await connect();
});
