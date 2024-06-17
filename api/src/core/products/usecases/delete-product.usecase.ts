import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import {
  IProductDataSource,
  ProductDataSource,
} from "../data/product.datasource";
import { ProductNotFoundException } from "../errors/product-not-found.exception";
import { ISkuDataSource, SkuDataSource } from "@core/skus/data/sku.datasource";

@injectable()
export class DeleteProductUseCase
  implements IBaseUseCase<string, { success: boolean }>
{
  constructor(
    @inject(ProductDataSource)
    private productDataSource: IProductDataSource,
    @inject(SkuDataSource)
    private skuDataSource: ISkuDataSource
  ) {}

  async execute(productId: string): Promise<{ success: boolean }> {
    const product = await this.productDataSource.findOne(productId);

    if (!product) {
      throw new ProductNotFoundException();
    }

    await this.productDataSource.deleteOne(productId);

    await this.skuDataSource.deleteByProduct(productId);

    return { success: true };
  }
}
