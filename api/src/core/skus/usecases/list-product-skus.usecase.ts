import { IBaseUseCase } from "@common/base-use-case";
import { inject, injectable } from "inversify";
import { Sku } from "../entities/sku";
import {
  IProductDataSource,
  ProductDataSource,
} from "@core/products/data/product.datasource";
import { ISkuDataSource, SkuDataSource } from "../data/sku.datasource";
import { ProductNotFoundException } from "@core/products/errors/product-not-found.exception";
import { LisProductSkusInput } from "./dto/list-product-skus.input";

@injectable()
export class ListProductSkusUseCase
  implements IBaseUseCase<LisProductSkusInput, Sku[]>
{
  constructor(
    @inject(ProductDataSource)
    private productDataSource: IProductDataSource,
    @inject(SkuDataSource)
    private skuDataSource: ISkuDataSource
  ) {}

  async execute({ productId }: LisProductSkusInput): Promise<Sku[]> {
    const productExists = await this.productDataSource.findOne(productId);

    if (!productExists) {
      throw new ProductNotFoundException(["productId not found."]);
    }

    return this.skuDataSource.listByProductId(productId);
  }
}
