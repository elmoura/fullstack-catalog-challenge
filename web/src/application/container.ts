import { Container } from "inversify";
import { ProductService } from "@core/products/data/ProductService";
import { ProductHttpService } from "./api/products/ProductHttpService";
import { SkuService } from "@core/skus/data/SkuService";
import { SkuHttpService } from "./api/skus/SkuHttpService";
import { CreateProductUseCase } from "@core/products/usecases/CreateProductUseCase";
import { UpdateProductUseCase } from "@core/products/usecases/UpdateProductUseCase";
import { ListProductsUseCase } from "@core/products/usecases/ListProductsUseCase";
import { FindProductByIdUseCase } from "@core/products/usecases/FindProductByIdUseCase";
import { DeleteProductUseCase } from "@core/products/usecases/DeleteProductUseCase";
import { FindSkusByProductseCase } from "@core/products/usecases/FindSkusByProductUseCase";
import { CreateSkuUseCase } from "@core/skus/usecases/CreateSkuUseCase";
import { FindSkuByIdUseCase } from "@core/skus/usecases/FindSkuByIdUseCase";
import { UpdateSkuUseCase } from "@core/skus/usecases/UpdateSkuUseCase";
import { DeleteSkuUseCase } from "@core/skus/usecases/DeleteSkuUseCase";

const setupContainer = (): Container => {
  const appContainer = new Container();

  appContainer.bind(ProductService).to(ProductHttpService);
  appContainer.bind(SkuService).to(SkuHttpService);

  appContainer.bind(CreateProductUseCase).toSelf();
  appContainer.bind(UpdateProductUseCase).toSelf();
  appContainer.bind(ListProductsUseCase).toSelf();
  appContainer.bind(FindProductByIdUseCase).toSelf();
  appContainer.bind(DeleteProductUseCase).toSelf();
  appContainer.bind(FindSkusByProductseCase).toSelf();

  appContainer.bind(CreateSkuUseCase).toSelf();
  appContainer.bind(FindSkuByIdUseCase).toSelf();
  appContainer.bind(UpdateSkuUseCase).toSelf();
  appContainer.bind(DeleteSkuUseCase).toSelf();

  return appContainer;
};

export const container = setupContainer();
