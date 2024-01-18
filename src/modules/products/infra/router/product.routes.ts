import { Router } from "express";
import { CreateProductController } from "../http/controller/CreateProduct/CreateProductController";
import { ListProductController } from "../http/controller/ListProduct/ListProductsController";
import { UpdateProductController } from "../http/controller/UpdateProduct/UpdateProductController";
import { DeleteProductController } from "../http/controller/DeleteProduct/DeleteProductController";

const productRouter = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController(); 
const deleteProductController = new DeleteProductController();

productRouter.post('/', createProductController.handle);

productRouter.get('/', listProductController.handle);

productRouter.put('/update/:_id', updateProductController.handle)

productRouter.delete('/delete/:_id', deleteProductController.handle);

export { productRouter };