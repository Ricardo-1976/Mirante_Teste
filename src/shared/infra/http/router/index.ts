import { Router } from "express";
import { productRouter } from "~/modules/products/infra/router/product.routes";

const router = Router();

router.use("/products", productRouter );

export { router };
