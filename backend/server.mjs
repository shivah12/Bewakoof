// server.js

import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import connection from "./src/Configs/db.js"; // Assuming db.js is retained as it is

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

import userRouter from "./src/routes/user.route.js";
import prodRouter from "./src/routes/products.routes.js";

app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: true,
  credentials: true,
};

app.use(cors(corsOptions));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

app.get("/", (req, res) => {
  res.send("App working");
});

app.use("/users", userRouter);
app.use("/", prodRouter);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
  console.log(`Server started at ${PORT}`);
});
