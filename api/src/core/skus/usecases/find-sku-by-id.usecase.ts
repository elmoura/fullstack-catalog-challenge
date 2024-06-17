import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import { validateInput } from "@common/utils/validate-input";
import { ProductNotFoundException } from "@core/products/errors/product-not-found.exception";
import { Sku } from "../entities/sku";
import { ISkuDataSource, SkuDataSource } from "../data/sku.datasource";
import { FindSkuByIdInput } from "./dto/find-sku-by-id.input";
import { SkuNotFoundException } from "../errors/sku-not-found.exception";

@injectable()
export class FindSkuByIdUseCase implements IBaseUseCase<FindSkuByIdInput, Sku> {
  constructor(
    @inject(SkuDataSource)
    private skuDataSource: ISkuDataSource
  ) {}

  async execute(data: FindSkuByIdInput): Promise<Sku> {
    await validateInput(data, FindSkuByIdInput);

    const sku = await this.skuDataSource.findOne(data.skuId);

    if (!sku) {
      throw new SkuNotFoundException();
    }

    if (sku.productId !== data.productId) {
      throw new ProductNotFoundException(["Invalid productId."]);
    }

    return sku;
  }
}
