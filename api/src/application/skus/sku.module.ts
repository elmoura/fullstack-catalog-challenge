import { ContainerModule, interfaces } from "inversify";
import { SkuController } from "./sku.controller";
import { CreateSkuUseCase } from "@core/skus/usecases/create-sku.usecase";
import { ISkuDataSource, SkuDataSource } from "@core/skus/data/sku.datasource";
import { SkuMongoDataSource } from "./datasources/sku.mongo-datasource";
import { ListProductSkusUseCase } from "@core/skus/usecases/list-product-skus.usecase";
import { UpdateSkuUseCase } from "@core/skus/usecases/update-sku.usecase";
import { FindSkuByIdUseCase } from "@core/skus/usecases/find-sku-by-id.usecase";
import { DeleteSkuUseCase } from "@core/skus/usecases/delete-sku.usecase";

export const skuModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<ISkuDataSource>(SkuDataSource).to(SkuMongoDataSource);

  bind(CreateSkuUseCase).toSelf();
  bind(ListProductSkusUseCase).toSelf();
  bind(UpdateSkuUseCase).toSelf();
  bind(FindSkuByIdUseCase).toSelf();
  bind(DeleteSkuUseCase).toSelf();

  bind(SkuController).toSelf();
});
