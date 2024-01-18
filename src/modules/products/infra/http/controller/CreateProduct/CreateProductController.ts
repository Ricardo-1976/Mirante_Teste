import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "~/modules/products/usecase/CreateProduct/CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price, type, barcode } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({ name, description, price, type, barcode });

    return response.status(201).send();
  }
}

export { CreateProductController };
