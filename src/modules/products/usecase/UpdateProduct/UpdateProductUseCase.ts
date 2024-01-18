import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../domin/repository/IProductRepository";
import { IUpdateProductDTO } from "../../infra/http/dtos/CreateProductDTO";
import { AppError } from "~/shared/errors/AppError";

@injectable()
class UpdateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository,
  ) { }

  async execute(data: IUpdateProductDTO): Promise<void> {

    const product = await this.productRepository.findById(data._id as string);
    
    if(!product){
      throw new AppError('Product does not exists!');
    } 
    
    product.name = data.name ? data.name : product.name;

    product.description = data.description ? data.description : product.description;

    product.price = data.price ? data.price : product.price;

    product.type = data.type ? data.type : product.type;

    product.barcode = data.barcode ? data.barcode : product.barcode;

    product.updatedAt = data.updatedAt ? data.updatedAt : new Date();
    
    await this.productRepository.update(product);
  }
}

export { UpdateProductUseCase };