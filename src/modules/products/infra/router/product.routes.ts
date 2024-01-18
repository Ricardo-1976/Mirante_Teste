import { Router } from "express";
import { CreateProductController } from "../http/controller/CreateProduct/CreateProductController";
import { ListProductController } from "../http/controller/ListProduct/ListProductsController";

const productRouter = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();

productRouter.post('/', createProductController.handle);

productRouter.get('/', listProductController.handle);

export { productRouter };