import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { IDocumentProductModel } from "../../domin/interface/IModelProduct";

@injectable()
class ListProductUseCase {
  constructor(
  @inject("ProductRepository")
    private productRepository: IProductRepository
    ) {}

  async execute(): Promise<IDocumentProductModel[]> {
    const products = await this.productRepository.list();

    return products;
 }
}

export { ListProductUseCase };