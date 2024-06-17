import {
  IProductService,
  ProductService,
} from "@core/products/data/ProductService";
import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { IUpdateProductInput } from "./dto/UpdateProductInput";
import { IProduct } from "@core/products/entities/Product";

@injectable()
export class UpdateProductUseCase
  implements IBaseUseCase<IUpdateProductInput, IProduct>
{
  constructor(
    @inject(ProductService)
    private productService: IProductService
  ) {}

  async execute(data: IUpdateProductInput): Promise<IProduct> {
    return this.productService.updateOne(data.productId, data);
  }
}
