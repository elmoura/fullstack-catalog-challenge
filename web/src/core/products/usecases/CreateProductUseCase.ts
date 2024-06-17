import {
  IProductService,
  ProductService,
} from "@core/products/data/ProductService";
import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { CreateProductInput } from "./dto/CreateProductInput";
import { IProduct } from "@core/products/entities/Product";

@injectable()
export class CreateProductUseCase
  implements IBaseUseCase<CreateProductInput, IProduct>
{
  constructor(
    @inject(ProductService)
    private productService: IProductService
  ) {}

  async execute(data: CreateProductInput): Promise<IProduct> {
    return this.productService.createOne(data);
  }
}
