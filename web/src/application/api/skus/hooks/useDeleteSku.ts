import { container } from "@application/container";
import { DeleteSkuUseCase } from "@core/skus/usecases/DeleteSkuUseCase";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const deleteSkuUseCase = container.get(DeleteSkuUseCase);

type DeleteParams = {
  skuId: string;
  productId: string;
};

export const useDeleteSku = () => {
  const { mutate, data, error, isLoading } = useBaseMutation<
    void,
    Error,
    DeleteParams
  >({
    mutationFn: async (params: DeleteParams) => {
      await deleteSkuUseCase.execute(params);
    },
  });

  return { mutate, data, error, isLoading };
};
