import { FunctionComponent } from "react";
import { ISku } from "@core/skus/entities/Sku";
import { Link } from "react-router-dom";

type Props = {
  sku: ISku;
};

export const SkuItem: FunctionComponent<Props> = ({ sku }) => {
  return (
    <article className="flex justify-between border-b border-blue-600 shadow-md py-4 px-4 h-fit">
      <div>
        <p className="font-bold">{sku.identifier}</p>
        <p>Codigo: {sku._id}</p>
        {sku.ean && <p>EAN: {sku.ean}</p>}
        {sku.price && (
          <p className="font-bold text-blue-600">R${sku.price.toFixed(2)}</p>
        )}
      </div>
      <div className="w-fit h-min">
        <Link to={`/products/${sku.productId}/skus/${sku._id}`}>
          <p className="font-semibold mt-2 text-blue-700">Ver detalhes</p>
        </Link>
      </div>
    </article>
  );
};
