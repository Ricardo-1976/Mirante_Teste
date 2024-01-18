import { ProductModel } from "~/modules/products/domin/entites/product";
import { IDocumentProductModel } from "~/modules/products/domin/interface/IModelProduct";
import { IProductRepository } from "~/modules/products/domin/repository/IProductRepository";
import { ICreateProductDTO, IListProductDTO, IUpdateProductDTO } from "~/modules/products/infra/http/dtos/CreateProductDTO";

class ProductRepository implements IProductRepository {
  constructor() {}
  
  async create(data: ICreateProductDTO): Promise<void> {
    await ProductModel.create(data);
  }

  async findById(_id: string): Promise<IDocumentProductModel | null> {
    return ProductModel.findOne({_id});
  }

  async findByCodeBar(barcode: number): Promise<IDocumentProductModel | null> {
    return ProductModel.findOne({ barcode });
  }
  async update(data: IDocumentProductModel): Promise<void> {
   await ProductModel.findByIdAndUpdate(data._id, (data))
  }

  async delete(_id: string): Promise<void> {
    const date = Date.now()
    await ProductModel.findByIdAndUpdate(_id, { deletedAt: date })
  }
  async list(): Promise<IDocumentProductModel[]> {
    return await ProductModel.find({
      deletedAt: null
    });
  }
}

export { ProductRepository };
