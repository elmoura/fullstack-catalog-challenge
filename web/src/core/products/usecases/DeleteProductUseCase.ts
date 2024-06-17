import {
  IProductService,
  ProductService,
} from "@core/products/data/ProductService";
import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";

@injectable()
export class DeleteProductUseCase implements IBaseUseCase<string, boolean> {
  constructor(
    @inject(ProductService)
    private productService: IProductService
  ) {}

  async execute(productId: string): Promise<boolean> {
    await this.productService.deleteOne(productId);
    return true;
  }
}
