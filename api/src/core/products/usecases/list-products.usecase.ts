import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@common/base-use-case";
import { IProduct } from "../entities/product";
import {
  IProductDataSource,
  ProductDataSource,
} from "../data/product.datasource";

@injectable()
export class ListProductsUseCase implements IBaseUseCase<void, IProduct[]> {
  constructor(
    @inject(ProductDataSource)
    private productDataSource: IProductDataSource
  ) {}

  async execute(): Promise<IProduct[]> {
    return this.productDataSource.list();
  }
}
