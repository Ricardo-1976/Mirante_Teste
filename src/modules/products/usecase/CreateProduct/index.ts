import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { ICreateProductDTO } from "../../infra/http/dtos/CreateProductDTO";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) {}

  async execute(data: ICreateProductDTO): Promise<void> {
    await this.productRepository.create(data);
  }
}

export { CreateProductUseCase };
