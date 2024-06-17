import { IBaseUseCase } from "@common/base-use-case";
import { inject, injectable } from "inversify";
import { CreateSkuInput } from "./dto/create-sku.input";
import { Sku } from "../entities/sku";
import {
  IProductDataSource,
  ProductDataSource,
} from "@core/products/data/product.datasource";
import { ISkuDataSource, SkuDataSource } from "../data/sku.datasource";
import { ProductNotFoundException } from "@core/products/errors/product-not-found.exception";
import { validateInput } from "@common/utils/validate-input";

@injectable()
export class CreateSkuUseCase implements IBaseUseCase<CreateSkuInput, Sku> {
  constructor(
    @inject(ProductDataSource)
    private productDataSource: IProductDataSource,
    @inject(SkuDataSource)
    private skuDataSource: ISkuDataSource
  ) {}

  async execute(data: CreateSkuInput): Promise<Sku> {
    await validateInput(data, CreateSkuInput);

    const productExists = await this.productDataSource.findOne(data.productId);

    if (!productExists) {
      throw new ProductNotFoundException(["productId not found."]);
    }

    return this.skuDataSource.createOne(data);
  }
}
