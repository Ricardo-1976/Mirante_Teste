import { ProductModel } from "~/modules/products/domin/entites/product";
import { IDocumentProductModel } from "~/modules/products/domin/interface/IModelProduct";
import { IProductRepository } from "~/modules/products/domin/repository/IProductRepository";
import { ICreateProductDTO } from "~/modules/products/infra/http/dtos/CreateProductDTO";

class ProductRepository implements IProductRepository {
  constructor() {}
  async list(): Promise<IDocumentProductModel[]> {
    return await ProductModel.find();
  }
  async create(data: ICreateProductDTO): Promise<void> {
    await ProductModel.create(data);
  }
  findById(id: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

export { ProductRepository };
