import { inject, injectable } from "inversify";
import { ISkuService, SkuService } from "../data/SkuService";
import { ISku } from "../entities/Sku";
import { IBaseUseCase } from "@utils/base-use-case";
import { FindSkuByIdInput } from "./dto/FindSkuByIdInput";

@injectable()
export class FindSkuByIdUseCase
  implements IBaseUseCase<FindSkuByIdInput, ISku>
{
  constructor(
    @inject(SkuService)
    private skuService: ISkuService
  ) {}

  async execute({ productId, skuId }: FindSkuByIdInput): Promise<ISku> {
    return this.skuService.findOne(productId, skuId);
  }
}
