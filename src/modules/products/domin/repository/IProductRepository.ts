import { ICreateProductDTO } from "../../infra/http/dtos/CreateProductDTO";
import { ProductModel } from "../../domin/entites/product";
import { IDocumentProductModel } from "../interface/IModelProduct";

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>;
  list(): Promise<IDocumentProductModel[]>;
  findById(id: string): Promise<any>;
}

export { IProductRepository };
