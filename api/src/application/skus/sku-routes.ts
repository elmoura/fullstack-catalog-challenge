import { appContainer } from "@application/app-container";
import { SkuController } from "./sku.controller";

const skuController = appContainer.get(SkuController);

export const skuRoutes = [
  {
    path: "/products/:productId/skus",
    method: "post",
    action: skuController.createOne,
  },
  {
    path: "/products/:productId/skus",
    method: "get",
    action: skuController.listProductSkus,
  },
  {
    path: "/products/:productId/skus/:skuId",
    method: "put",
    action: skuController.updateOne,
  },
  {
    path: "/products/:productId/skus/:skuId",
    method: "get",
    action: skuController.findById,
  },
  {
    path: "/products/:productId/skus/:skuId",
    method: "delete",
    action: skuController.deleteOne,
  },
];
