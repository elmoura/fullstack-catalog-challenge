import Router from "koa-router";
import { productRoutes } from "@application/products/product-routes";
import { skuRoutes } from "@application/skus/sku-routes";

const router = new Router({ prefix: "/api" });

const allRoutes = [...productRoutes, ...skuRoutes];

allRoutes.forEach((route) => {
  router[route.method](route.path, route.action);
});

export { router };
