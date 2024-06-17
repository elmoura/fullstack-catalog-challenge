import { IBaseUseCase } from "@common/base-use-case";
import { inject, injectable } from "inversify";
import { Sku } from "../entities/sku";
import { ISkuDataSource, SkuDataSource } from "../data/sku.datasource";
import { validateInput } from "@common/utils/validate-input";
import { UpdateSkuInput } from "./dto/update-sku.input";
import { SkuNotFoundException } from "../errors/sku-not-found.exception";
import { ProductNotFoundException } from "@core/products/errors/product-not-found.exception";

@injectable()
export class UpdateSkuUseCase implements IBaseUseCase<UpdateSkuInput, Sku> {
  constructor(
    @inject(SkuDataSource)
    private skuDataSource: ISkuDataSource
  ) {}

  async execute(data: UpdateSkuInput): Promise<Sku> {
    await validateInput(data, UpdateSkuInput);

    const { skuId } = data;

    const sku = await this.skuDataSource.findOne(skuId);

    if (!sku) {
      throw new SkuNotFoundException();
    }

    if (sku.productId !== data.productId) {
      throw new ProductNotFoundException(["Invalid productId."]);
    }

    delete data.skuId;
    delete data.productId;

    await this.skuDataSource.updateOne(skuId, data);
    return this.skuDataSource.findOne(skuId);
  }
}
