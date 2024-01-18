import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "~/modules/products/usecase/UpdateProduct/UpdateProductUseCase";

class UpdateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;
    const { name, description, price, type, barcode } = request.body;

    const updateProductUseCase = container.resolve(UpdateProductUseCase);

    await updateProductUseCase.execute({ _id, name, description, price, type, barcode });

    return response.status(201).send();
  }
}

export { UpdateProductController };
