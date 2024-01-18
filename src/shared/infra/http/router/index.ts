import { Router } from "express";
import { productRouter } from "~/modules/products/infra/router/product.routes";

const router = Router();

router.get('/', (_, res) => {
  return res.json('Welcome to the Mirantes API');
});
router.use("/products", productRouter );

export { router };
