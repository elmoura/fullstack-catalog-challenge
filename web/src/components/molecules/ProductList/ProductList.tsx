import { IProduct } from "@core/products/entities/Product";
import { FunctionComponent } from "react";
import { ProductItem } from "../ProductItem";

type Props = {
  products: IProduct[];
};
const EmptyState = () => {
  return (
    <div
      className="flex justify-center items-center h-full mt-10"
      data-testid="empty-state"
    >
      <p className="text-center font-thin text-2xl text-gray-800">
        Ops! Você não tem produtos ainda :(
      </p>
    </div>
  );
};

export const ProductList: FunctionComponent<Props> = ({ products }) => {
  return products.length === 0 ? (
    <EmptyState />
  ) : (
    <div className="grid gap-y-2">
      {products.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
};
