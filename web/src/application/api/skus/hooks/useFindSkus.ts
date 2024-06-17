import { container } from "@application/container";
import { FindSkusByProductseCase } from "@core/products/usecases/FindSkusByProductUseCase";
import { QueryKeys } from "@utils/hooks/queryKeys";
import { useBaseQuery } from "@utils/hooks/useBaseQuery";

type Params = {
  productId: string;
};

const findSkusByProductseCase = container.get(FindSkusByProductseCase);

export const useFindSkus = ({ productId }: Params) => {
  if (!productId) {
    throw new Error(
      "productId not provided for useFindSkus hook. productId is required."
    );
  }

  const { data, error, isLoading, refetch } = useBaseQuery({
    queryKey: [QueryKeys.FindSkusByProduct, productId],
    queryFn: async () => {
      return findSkusByProductseCase.execute(productId);
    },
  });

  return { data, error, isLoading, refetch };
};
