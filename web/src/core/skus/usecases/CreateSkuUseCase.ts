import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { CreateSkuInput } from "./dto/CreateSkuInput";
import { ISku } from "../entities/Sku";
import { ISkuService, SkuService } from "../data/SkuService";

@injectable()
export class CreateSkuUseCase implements IBaseUseCase<CreateSkuInput, ISku> {
  constructor(
    @inject(SkuService)
    private skuService: ISkuService
  ) {}

  async execute(data: CreateSkuInput): Promise<ISku> {
    return this.skuService.createOne(data);
  }
}
