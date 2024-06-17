import { Context } from "koa";
import { inject, injectable } from "inversify";
import { CreateSkuUseCase } from "@core/skus/usecases/create-sku.usecase";
import { CreateSkuInput } from "@core/skus/usecases/dto/create-sku.input";
import { ListProductSkusUseCase } from "@core/skus/usecases/list-product-skus.usecase";
import { UpdateSkuInput } from "@core/skus/usecases/dto/update-sku.input";
import { UpdateSkuUseCase } from "@core/skus/usecases/update-sku.usecase";
import { FindSkuByIdUseCase } from "@core/skus/usecases/find-sku-by-id.usecase";
import { DeleteSkuUseCase } from "@core/skus/usecases/delete-sku.usecase";

@injectable()
export class SkuController {
  constructor(
    @inject(CreateSkuUseCase)
    private createSkuUseCase: CreateSkuUseCase,
    @inject(ListProductSkusUseCase)
    private listProductSkusUseCase: ListProductSkusUseCase,
    @inject(UpdateSkuUseCase)
    private updateSkuUseCase: UpdateSkuUseCase,
    @inject(FindSkuByIdUseCase)
    private findSkuByIdUseCase: FindSkuByIdUseCase,
    @inject(DeleteSkuUseCase)
    private deleteSkuUseCase: DeleteSkuUseCase
  ) {}

  createOne = async (ctx: Context) => {
    const productId = ctx.params.productId;
    const data = ctx.request.body as CreateSkuInput;

    const result = await this.createSkuUseCase.execute({
      ...data,
      productId,
    });

    ctx.status = 201;
    ctx.body = result;
  };

  updateOne = async (ctx: Context) => {
    const skuId: string = ctx.params.skuId;
    const productId: string = ctx.params.productId;
    const data = ctx.request.body as UpdateSkuInput;

    const result = await this.updateSkuUseCase.execute({
      ...data,
      skuId,
      productId,
    });

    ctx.body = result;
  };

  listProductSkus = async (ctx: Context) => {
    const productId: string = ctx.params.productId;

    const result = await this.listProductSkusUseCase.execute({ productId });

    ctx.body = result;
  };

  findById = async (ctx: Context) => {
    const productId: string = ctx.params.productId;
    const skuId: string = ctx.params.skuId;

    const result = await this.findSkuByIdUseCase.execute({
      skuId,
      productId,
    });

    ctx.body = result;
  };

  deleteOne = async (ctx: Context) => {
    const skuId: string = ctx.params.skuId;

    const result = await this.deleteSkuUseCase.execute({ skuId });

    ctx.body = result;
    ctx.status = 204;
  };
}
