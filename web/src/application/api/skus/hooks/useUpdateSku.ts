import { container } from "@application/container";
import { ISku } from "@core/skus/entities/Sku";
import { UpdateSkuInput } from "@core/skus/usecases/dto/UpdateSkuInput";
import { UpdateSkuUseCase } from "@core/skus/usecases/UpdateSkuUseCase";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const updateSkuUseCase = container.get(UpdateSkuUseCase);

export const useUpdateSku = () => {
  const { data, error, isLoading, mutate, isSuccess } = useBaseMutation<
    ISku,
    Error,
    UpdateSkuInput
  >({
    mutationFn: async (mutationData) => {
      return updateSkuUseCase.execute(mutationData);
    },
  });

  return { data, error, isLoading, mutate, isSuccess };
};
