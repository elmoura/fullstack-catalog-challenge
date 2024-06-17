import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { ISku } from "../entities/Sku";
import { ISkuService, SkuService } from "../data/SkuService";
import { UpdateSkuInput } from "./dto/UpdateSkuInput";

@injectable()
export class UpdateSkuUseCase implements IBaseUseCase<UpdateSkuInput, ISku> {
  constructor(
    @inject(SkuService)
    private skuService: ISkuService
  ) {}

  async execute(data: UpdateSkuInput): Promise<ISku> {
    return this.skuService.updateOne(data.skuId, data);
  }
}
