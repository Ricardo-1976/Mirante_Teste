import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductUseCase } from "~/modules/products/usecase/DeleteProduct/DeleteProductUseCase";

class DeleteProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;

    const deleteProductUseCase = container.resolve(DeleteProductUseCase);

    await deleteProductUseCase.execute(_id);

    return response.status(201).send();
  }
}

export { DeleteProductController };