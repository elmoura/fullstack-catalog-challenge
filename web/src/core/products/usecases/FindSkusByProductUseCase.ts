import {
  IProductService,
  ProductService,
} from "@core/products/data/ProductService";
import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { ISku } from "@core/skus/entities/Sku";

@injectable()
export class FindSkusByProductseCase implements IBaseUseCase<string, ISku[]> {
  constructor(
    @inject(ProductService)
    private productService: IProductService
  ) {}

  async execute(productId: string): Promise<ISku[]> {
    return this.productService.listSkusByProductId(productId);
  }
}
