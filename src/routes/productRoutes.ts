import { Router } from "express";
import { productController } from "../controllers/productController.js";

const routes = Router();
routes.get("/", productController.getRecords);
routes.get("/:slug", productController.getRecord);
routes.get("/category/:slug", productController.getRecordsByCategory);

export const productRoutes = routes;
