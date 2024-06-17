import { appContainer } from "@application/app-container";
import { ProductController } from "./product.controller";

const productController = appContainer.get(ProductController);

export const productRoutes = [
  {
    path: "/products",
    method: "post",
    action: productController.createOne,
  },
  {
    path: "/products",
    method: "get",
    action: productController.list,
  },
  {
    path: "/products/:id",
    method: "get",
    action: productController.findById,
  },
  {
    path: "/products/:id",
    method: "put",
    action: productController.updateOne,
  },
  {
    path: "/products/:id",
    method: "delete",
    action: productController.deleteOne,
  },
];
