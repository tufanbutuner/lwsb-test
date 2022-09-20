import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

dotenv.config();
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.use("/posts", postRoutes);

const dbConnectionString = process.env.MONGO_CONNECTION_STRING;

mongoose
  .connect(dbConnectionString)
  .then(() => app.listen(port, console.log(`Listening on port ${port}`)))
  .catch((err) => console.log(err.message));
