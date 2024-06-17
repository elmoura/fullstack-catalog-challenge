import { IsObjectId } from "@common/validations/is-object-id";
import { Validate } from "class-validator";

export class FindProductByIdInput {
  @Validate(IsObjectId)
  productId: string;
}
