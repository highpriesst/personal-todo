import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotevn from "dotenv";
import bodyParser from "body-parser";
import connect from "../config/database";

dotevn.config();
const app: Application = express();

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response): void => {
  res.json({
    1: "its working",
  });
});

app.listen(PORT, async (): Promise<void> => {
  console.log(`Server is listening on PORT:${PORT}`);

  await connect();
});
