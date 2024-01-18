import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductUseCase } from "~/modules/products/usecase/ListProduct/ListProductsUseCase";

class ListProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductUseCase = container.resolve(ListProductUseCase);

    const all = await listProductUseCase.execute();

    return response.json(all);
  }
}

export { ListProductController };