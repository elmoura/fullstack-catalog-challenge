import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import { IProduct } from "../entities/product";
import { CreateProductInput } from "./dto/create-product.input";
import {
  IProductDataSource,
  ProductDataSource,
} from "../data/product.datasource";
import { validateInput } from "@common/utils/validate-input";

@injectable()
export class CreateProductUseCase
  implements IBaseUseCase<CreateProductInput, IProduct>
{
  constructor(
    @inject(ProductDataSource)
    private productDataSource: IProductDataSource
  ) {}

  async execute(data: CreateProductInput): Promise<IProduct> {
    await validateInput(data, CreateProductInput);

    return this.productDataSource.createOne(data);
  }
}
