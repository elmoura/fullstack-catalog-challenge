import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import { IProduct } from "../entities/product";
import { FindProductByIdInput } from "./dto/find-product-by-id.input";
import {
  IProductDataSource,
  ProductDataSource,
} from "../data/product.datasource";
import { ProductNotFoundException } from "../errors/product-not-found.exception";
import { validateInput } from "@common/utils/validate-input";

@injectable()
export class FindProductByIdUseCase
  implements IBaseUseCase<FindProductByIdInput, IProduct>
{
  constructor(
    @inject(ProductDataSource)
    public readonly productDataSource: IProductDataSource
  ) {}

  async execute(input: FindProductByIdInput): Promise<IProduct> {
    await validateInput(input, FindProductByIdInput);

    const product = await this.productDataSource.findOne(input.productId);

    if (!product) {
      throw new ProductNotFoundException();
    }

    return product;
  }
}
