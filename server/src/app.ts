import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotevn from "dotenv";
import bodyParser from "body-parser";
import connect from "../config/database";
import router from "../routes/todo.route";
import { errorHandler } from "../utils/error-handler";

dotevn.config();
const app: Application = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Its up");
});

app.listen(PORT, async (): Promise<void> => {
  console.log(`Server is listening on PORT:${PORT}`);

  await connect();
});
