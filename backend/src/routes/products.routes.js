import { Router } from "express";
import {
  getProducts,
  postProducts,
  getProduct,
} from "../controllers/products.controller.js";
import cookieParser from "cookie-parser";

const prodRouter = Router();
prodRouter.use(cookieParser());

//Routes for products
prodRouter.get("/prod/:category", getProducts);
prodRouter.get("/product/:id", getProduct);
prodRouter.post("/prod", postProducts);

export default prodRouter;