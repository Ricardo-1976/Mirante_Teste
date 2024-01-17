import { ProductsEntity } from "../entities/productEntity";

export interface IProductsRepository {
  insert(product: ProductsEntity): Promise<void>;
  findAll(): Promise<ProductsEntity[]>;
}