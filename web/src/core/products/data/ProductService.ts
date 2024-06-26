import { ISku } from "@core/skus/entities/Sku";
import { IProduct } from "../entities/Product";
import { AutoGeneratedFields } from "@utils/auto-generated-fields";

export const ProductService = "ProductService";

export interface IProductService {
  list(): Promise<IProduct[]>;
  listSkusByProductId(productId: string): Promise<ISku[]>;
  findOne(productId: string): Promise<IProduct>;
  createOne(data: Omit<IProduct, AutoGeneratedFields>): Promise<IProduct>;
  updateOne(productId: string, data: Partial<IProduct>): Promise<IProduct>;
  deleteOne(productId: string): Promise<void>;
}
