import { container } from "@application/container";
import { FindProductByIdUseCase } from "@core/products/usecases/FindProductByIdUseCase";
import { QueryKeys } from "@utils/hooks/queryKeys";
import { useBaseQuery } from "@utils/hooks/useBaseQuery";

type Params = {
  productId: string;
};

const findProductByIdUseCase = container.get(FindProductByIdUseCase);

export const useFindProduct = ({ productId }: Params) => {
  if (!productId) {
    throw new Error(
      "productId not provided for useFindProduct hook. productId is required."
    );
  }

  const { data, error, isLoading, refetch } = useBaseQuery({
    queryKey: [QueryKeys.FindProductById, productId],
    queryFn: async () => {
      return findProductByIdUseCase.execute(productId);
    },
  });

  return { data, error, isLoading, refetch };
};
