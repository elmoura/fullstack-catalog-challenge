import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import { ISkuDataSource, SkuDataSource } from "../data/sku.datasource";
import { SkuNotFoundException } from "../errors/sku-not-found.exception";
import { DeleteSkuInput } from "./dto/delete-sku.input";

type DeleteSkuOutput = { success: boolean };

@injectable()
export class DeleteSkuUseCase
  implements IBaseUseCase<DeleteSkuInput, DeleteSkuOutput>
{
  constructor(
    @inject(SkuDataSource)
    private skuDataSource: ISkuDataSource
  ) {}

  async execute({ skuId }: DeleteSkuInput): Promise<DeleteSkuOutput> {
    const sku = await this.skuDataSource.findOne(skuId);

    if (!sku) {
      throw new SkuNotFoundException();
    }

    await this.skuDataSource.deleteOne(skuId);

    return { success: true };
  }
}
