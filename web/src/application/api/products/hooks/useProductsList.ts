import { container } from "@application/container";
import { ListProductsUseCase } from "@core/products/usecases/ListProductsUseCase";
import { QueryKeys } from "@utils/hooks/queryKeys";
import { useBaseQuery } from "@utils/hooks/useBaseQuery";

const listProductsUseCase = container.get(ListProductsUseCase);

export const useProductsList = () => {
  const { data, error, isLoading, refetch } = useBaseQuery({
    queryKey: [QueryKeys.ListProducts],
    queryFn: async () => listProductsUseCase.execute(),
  });

  return {
    data,
    error,
    isLoading,
    refetch,
  };
};
