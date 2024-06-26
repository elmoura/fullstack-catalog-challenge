import { AutoGeneratedFields } from "@common/auto-generated-fields";
import { IsObjectId } from "@common/validations/is-object-id";
import { IProduct } from "@core/products/entities/product";
import { IsNumber, IsOptional, IsString, Validate } from "class-validator";

export class UpdateProductInput
  implements Partial<Omit<IProduct, AutoGeneratedFields>>
{
  @Validate(IsObjectId)
  productId: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;
}
