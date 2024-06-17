import { Catalog } from "@screens/products/Catalog";
import { ProductDetails } from "@screens/products/ProductDetails";
import { SkuDetails } from "@screens/skus/SkuDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Catalog,
  },
  {
    path: "/products/:productId",
    Component: ProductDetails,
  },
  {
    path: "/products/:productId/skus/:skuId",
    Component: SkuDetails,
  },
]);
