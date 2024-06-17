import { IsObjectId } from "@common/validations/is-object-id";
import { Validate } from "class-validator";

export class DeleteSkuInput {
  @Validate(IsObjectId)
  skuId: string;
}
