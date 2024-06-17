import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { ISkuService, SkuService } from "../data/SkuService";
import { DeleteSkuInput } from "./dto/DeleteSkuInput";

@injectable()
export class DeleteSkuUseCase implements IBaseUseCase<DeleteSkuInput, boolean> {
  constructor(
    @inject(SkuService)
    private skuService: ISkuService
  ) {}

  async execute({ productId, skuId }: DeleteSkuInput): Promise<boolean> {
    await this.skuService.deleteOne(productId, skuId);
    return true;
  }
}
