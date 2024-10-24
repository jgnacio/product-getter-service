import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import router from "./routes/index";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const prisma = new PrismaClient();

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(port, () => {
  console.log(`Server Products-Cache-service running on port: ${port}`);
});
