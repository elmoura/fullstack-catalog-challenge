import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import { UpdateProductInput } from "./dto/update-product.input";
import { IProduct } from "../entities/product";
import {
  IProductDataSource,
  ProductDataSource,
} from "../data/product.datasource";
import { ProductNotFoundException } from "../errors/product-not-found.exception";
import { validateInput } from "@common/utils/validate-input";

@injectable()
export class UpdateProductUseCase
  implements IBaseUseCase<UpdateProductInput, IProduct>
{
  constructor(
    @inject(ProductDataSource)
    private productDataSource: IProductDataSource
  ) {}

  async execute(data: UpdateProductInput): Promise<IProduct> {
    await validateInput(data, UpdateProductInput);

    const { productId } = data;

    const product = await this.productDataSource.findOne(productId);

    if (!product) {
      throw new ProductNotFoundException();
    }

    delete data.productId;

    await this.productDataSource.updateOne(productId, data);
    return this.productDataSource.findOne(productId);
  }
}
