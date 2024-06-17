import { Validate } from "class-validator";
import { IsObjectId } from "@common/validations/is-object-id";

export class FindSkuByIdInput {
  @Validate(IsObjectId)
  skuId: string;

  @Validate(IsObjectId)
  productId: string;
}
