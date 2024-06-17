import { container } from "@application/container";
import { ISku } from "@core/skus/entities/Sku";
import { UpdateSkuInput } from "@core/skus/usecases/dto/UpdateSkuInput";
import { UpdateSkuUseCase } from "@core/skus/usecases/UpdateSkuUseCase";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const updateSkuUseCase = container.get(UpdateSkuUseCase);

type Params = {
  onSuccess?: (sku: ISku) => void;
};

export const useUpdateSku = ({ onSuccess }: Params) => {
  const { data, error, isLoading, mutate, isSuccess } = useBaseMutation<
    ISku,
    Error,
    UpdateSkuInput
  >({
    mutationFn: async (mutationData) => {
      return updateSkuUseCase.execute(mutationData);
    },
    onSuccess,
  });

  return { data, error, isLoading, mutate, isSuccess };
};
