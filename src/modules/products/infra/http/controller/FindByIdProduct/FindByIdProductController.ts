import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindByIdProductUseCase } from "~/modules/products/usecase/FindByIdProduct/FindByIdProductUseCase";

class FindByIdProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { _id } = request.params;

    const findByIdProductUseCase = container.resolve(FindByIdProductUseCase);

    const all = await findByIdProductUseCase.execute(_id);

    return response.json(all);
  }
}

export { FindByIdProductController };