import {
  IProductService,
  ProductService,
} from "@core/products/data/ProductService";
import { inject, injectable } from "inversify";
import { IBaseUseCase } from "@utils/base-use-case";
import { IProduct } from "@core/products/entities/Product";

@injectable()
export class ListProductsUseCase implements IBaseUseCase<void, IProduct[]> {
  constructor(
    @inject(ProductService)
    private productService: IProductService
  ) {}

  async execute(): Promise<IProduct[]> {
    return this.productService.list();
  }
}
