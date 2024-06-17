import { ISku } from "@core/skus/entities/Sku";
import { FunctionComponent } from "react";
import { SkuItem } from "../SkuItem";

type Props = {
  skus: ISku[];
};

export const SkuList: FunctionComponent<Props> = ({ skus }) => {
  return (
    <div className="grid gap-y-2">
      {skus.map((sku, index) => (
        <SkuItem sku={sku} key={index} />
      ))}
    </div>
  );
};
