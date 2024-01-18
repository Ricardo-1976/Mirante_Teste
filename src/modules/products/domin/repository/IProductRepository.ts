import { ICreateProductDTO, IListProductDTO, IUpdateProductDTO } from "../../infra/http/dtos/CreateProductDTO";
import { IDocumentProductModel } from "../interface/IModelProduct";

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<void>;
  list(): Promise<IDocumentProductModel[]>;
  findByCodeBar(barcode: number): Promise<IDocumentProductModel | null>;
  findById(_id: string): Promise<IDocumentProductModel | null>;
  update(data: IUpdateProductDTO): Promise<void>;
  delete(_id: string): Promise<void>;
}

export { IProductRepository };
