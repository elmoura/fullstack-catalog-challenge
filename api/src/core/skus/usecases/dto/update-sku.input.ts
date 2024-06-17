import { Sku } from "@core/skus/entities/sku";
import { IsObjectId } from "@common/validations/is-object-id";
import { IsNumber, IsOptional, IsString, Validate } from "class-validator";

export class UpdateSkuInput implements Partial<Sku> {
  @Validate(IsObjectId)
  skuId: string;

  @Validate(IsObjectId)
  productId: string;

  @IsString()
  @IsOptional()
  identifier: string;

  @IsString()
  @IsOptional()
  ean?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;
}
