import { container } from "@application/container";
import { FindSkuByIdUseCase } from "@core/skus/usecases/FindSkuByIdUseCase";
import { QueryKeys } from "@utils/hooks/queryKeys";
import { useBaseQuery } from "@utils/hooks/useBaseQuery";

const findSkuByIdUseCase = container.get(FindSkuByIdUseCase);

type Params = {
  skuId: string;
  productId: string;
};

export const useFindSku = ({ productId, skuId }: Params) => {
  if (!productId || !skuId)
    throw new Error("productId and skuId are required for useFindSku hook.");

  const { data, error, isLoading, refetch } = useBaseQuery({
    queryKey: [QueryKeys.FindSku, skuId, productId],
    queryFn: () => {
      return findSkuByIdUseCase.execute({ productId, skuId });
    },
  });

  return { data, error, isLoading, refetch };
};
