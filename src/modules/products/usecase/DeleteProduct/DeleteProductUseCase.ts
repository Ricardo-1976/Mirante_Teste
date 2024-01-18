import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { AppError } from "~/shared/errors/AppError";

@injectable()
class DeleteProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute(_id: string): Promise<void> {
    const product = await this.productRepository.findById(_id);
    
    if(!product){
      throw new AppError('Product does not exists!');
    } 
    await this.productRepository.delete(_id);
  }
}

export { DeleteProductUseCase };
