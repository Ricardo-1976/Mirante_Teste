import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { IListProductDTO } from "../../infra/http/dtos/CreateProductDTO";
import { IDocumentProductModel } from "../../domin/interface/IModelProduct";

@injectable()
class ListProductUseCase {
  constructor(
  @inject("ProductRepository")
    private productRepository: IProductRepository
    ) {}

  async execute(): Promise<IDocumentProductModel[]> {
    const allproducts = await this.productRepository.list();
    return allproducts;
 }
}

export { ListProductUseCase };