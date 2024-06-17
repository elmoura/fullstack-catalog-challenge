import { container } from "@application/container";
import { ISku } from "@core/skus/entities/Sku";
import { CreateSkuUseCase } from "@core/skus/usecases/CreateSkuUseCase";
import { CreateSkuInput } from "@core/skus/usecases/dto/CreateSkuInput";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const createSkuUseCase = container.get(CreateSkuUseCase);

export const useCreateSku = () => {
  const { mutate, data, error, isLoading } = useBaseMutation<
    ISku,
    Error,
    CreateSkuInput
  >({
    mutationFn: async (input) => {
      return createSkuUseCase.execute(input);
    },
  });

  return {
    mutate,
    data,
    error,
    isLoading,
  };
};
