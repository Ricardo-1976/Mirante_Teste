import { container } from "tsyringe";
import { IProductRepository } from "~/modules/products/domin/repository/IProductRepository";
import { ProductRepository } from "~/modules/products/infra/mongoose/repositories/ProductRepository";

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository,
);
