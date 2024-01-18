import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { AppError } from "~/shared/errors/AppError";
import { IDocumentProductModel } from "../../domin/interface/IModelProduct";

@injectable()
class FindByIdProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute(_id: string): Promise<IDocumentProductModel | null> {
    const product = await this.productRepository.findById(_id);
    
    if(!product){
      throw new AppError('Product does not exists!');
    } 
    await this.productRepository.findById(_id);

    return product;
  }
}

export { FindByIdProductUseCase };
