import { Container } from "inversify";
import { productModule } from "./products/product.module";
import { skuModule } from "./skus/sku.module";

const appContainer = new Container();

appContainer.load(productModule);
appContainer.load(skuModule);

export { appContainer };
