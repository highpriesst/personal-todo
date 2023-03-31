import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app: Application = express();

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response): void => {
  res.json({
    1: "its working",
  });
});

app.listen(PORT, (): void => {
  console.log(`Server is listening on PORT:${PORT}`);
});
