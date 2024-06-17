import { ISku } from "@core/skus/entities/Sku";
import { AutoGeneratedFields } from "@utils/auto-generated-fields";

export class UpdateSkuInput
  implements Partial<Omit<ISku, AutoGeneratedFields>>
{
  skuId: string;
  productId: string;
  identifier?: string;
  description?: string;
  ean?: string;
  price?: number;
}
