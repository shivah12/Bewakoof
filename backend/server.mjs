import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route';
import prodRouter from './routes/products.routes.js';
import connection from './src/Configs/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: 'https://bewakoof-frontend.onrender.com', // Allow your frontend to access the backend
  credentials: true,
};

app.use(cors(corsOptions));

// Serve API routes
app.use('/users', userRouter);
app.use('/', prodRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed", error);
  }
  console.log(`Server started at ${PORT}`);
});

export default app;
