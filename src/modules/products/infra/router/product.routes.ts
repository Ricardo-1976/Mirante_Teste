import { Router } from "express";
import { CreateProductController } from "../http/controller/CreateProduct/CreateProductController";
import { ListProductController } from "../http/controller/ListProduct/ListProductsController";
import { UpdateProductController } from "../http/controller/UpdateProduct/UpdateProductController";
import { DeleteProductController } from "../http/controller/DeleteProduct/DeleteProductController";
import { celebrate } from "celebrate";
import { createProductValidator } from "../../usecase/Validation/CreateProductValidator";
import { updateProductValidator } from "../../usecase/Validation/UpdateProductValidator";
import { FindByIdProductController } from "../http/controller/FindByIdProduct/FindByIdProductController";

const productRouter = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController(); 
const deleteProductController = new DeleteProductController();
const findByIdProductController = new FindByIdProductController();

productRouter.post('/', celebrate(createProductValidator), createProductController.handle);

productRouter.get('/', celebrate(updateProductValidator), listProductController.handle);

productRouter.put('/update/:_id', updateProductController.handle)

productRouter.delete('/delete/:_id', deleteProductController.handle);

productRouter.get('/:_id', findByIdProductController.handle);

export { productRouter };