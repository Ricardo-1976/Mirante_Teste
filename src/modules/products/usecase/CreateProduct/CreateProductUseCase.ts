import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { ICreateProductDTO } from "../../infra/http/dtos/CreateProductDTO";
import { AppError } from "~/shared/errors/AppError";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute(data: ICreateProductDTO): Promise<void> {
    const product = await this.productRepository.findByCodeBar(data.barcode as number);
    
    if(product){
      throw new AppError('Product already exists.');
    } 
    await this.productRepository.create(data);
  }
}

export { CreateProductUseCase };
