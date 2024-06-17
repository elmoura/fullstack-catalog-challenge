import { Context } from "koa";
import { inject, injectable } from "inversify";
import { CreateProductUseCase } from "@core/products/usecases/create-product.usecase";
import { DeleteProductUseCase } from "@core/products/usecases/delete-product.usecase";
import { FindProductByIdUseCase } from "@core/products/usecases/find-product-by-id.usecase";
import { ListProductsUseCase } from "@core/products/usecases/list-products.usecase";
import { UpdateProductUseCase } from "@core/products/usecases/update-product.usecase";
import { CreateProductInput } from "@core/products/usecases/dto/create-product.input";
import { UpdateProductInput } from "@core/products/usecases/dto/update-product.input";

@injectable()
export class ProductController {
  constructor(
    @inject(CreateProductUseCase)
    private createProductUseCase: CreateProductUseCase,
    @inject(FindProductByIdUseCase)
    private findProductByIdUseCase: FindProductByIdUseCase,
    @inject(ListProductsUseCase)
    private listProductsUseCase: ListProductsUseCase,
    @inject(UpdateProductUseCase)
    private updateProductUseCase: UpdateProductUseCase,
    @inject(DeleteProductUseCase)
    private deleteProductUseCase: DeleteProductUseCase
  ) {}

  createOne = async (ctx: Context) => {
    const data = ctx.request.body as CreateProductInput;

    const result = await this.createProductUseCase.execute(data);

    ctx.body = result;
    ctx.status = 201;
  };

  findById = async (ctx: Context) => {
    const productId: string = ctx.params.id;

    const result = await this.findProductByIdUseCase.execute({ productId });

    ctx.body = result;
  };

  updateOne = async (ctx: Context) => {
    const productId: string = ctx.params.id;
    const data = ctx.request.body as UpdateProductInput;

    const result = await this.updateProductUseCase.execute({
      ...data,
      productId,
    });

    ctx.body = result;
  };

  list = async (ctx: Context) => {
    const result = await this.listProductsUseCase.execute();

    ctx.body = result;
  };

  deleteOne = async (ctx: Context) => {
    const productId: string = ctx.params.id;

    const result = await this.deleteProductUseCase.execute(productId);

    ctx.body = result;
    ctx.status = 204;
  };
}
