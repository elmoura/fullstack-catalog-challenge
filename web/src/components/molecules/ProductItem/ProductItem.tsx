import { IProduct } from "@core/products/entities/Product";
import { FunctionComponent } from "react";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { FALLBACK_PRODUCT_IMAGE_URL } from "@src/main";

type Props = {
  product: IProduct;
};

export const ProductItem: FunctionComponent<Props> = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
      <article className="border-2 shadow-lg border-blue-700 flex py-8 px-8 rounded-md hover:bg-slate-50 transition-colors cursor-pointer">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fallback={FALLBACK_PRODUCT_IMAGE_URL}
          className="rounded shadow-md"
          width={200}
        />

        <div className="flex rounded items-center justify-between w-full ml-5">
          <div className="lg:w-9/12 2xl:w-full pl-4">
            <p className="text-2xl font-bold">{product.name}</p>
            <p className="text-xs py-2 italic">{product._id}</p>
            <p className="font-thin mt-3">{product.description}</p>
          </div>

          <div className="flex items-center text-blue-700 w-fit my-8 justify-between">
            <p className="font-bold text-2xl">R${product.price.toFixed(2)}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
