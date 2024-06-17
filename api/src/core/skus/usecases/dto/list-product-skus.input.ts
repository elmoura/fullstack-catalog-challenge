import { IsObjectId } from "@common/validations/is-object-id";
import { Validate } from "class-validator";

export class LisProductSkusInput {
  @Validate(IsObjectId)
  productId: string;
}
