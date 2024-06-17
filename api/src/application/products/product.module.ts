import { ContainerModule, interfaces } from "inversify";
import {
  IProductDataSource,
  ProductDataSource,
} from "@core/products/data/product.datasource";
import { ProductMongoDatasource } from "./datasources/product.mongo-datasource";
import { CreateProductUseCase } from "@core/products/usecases/create-product.usecase";
import { FindProductByIdUseCase } from "@core/products/usecases/find-product-by-id.usecase";
import { ListProductsUseCase } from "@core/products/usecases/list-products.usecase";
import { UpdateProductUseCase } from "@core/products/usecases/update-product.usecase";
import { DeleteProductUseCase } from "@core/products/usecases/delete-product.usecase";
import { ProductController } from "./product.controller";

export const productModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IProductDataSource>(ProductDataSource).to(ProductMongoDatasource);

  bind(CreateProductUseCase).toSelf();
  bind(FindProductByIdUseCase).toSelf();
  bind(ListProductsUseCase).toSelf();
  bind(UpdateProductUseCase).toSelf();
  bind(DeleteProductUseCase).toSelf();

  bind(ProductController).toSelf();
});
