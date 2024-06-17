import { container } from "@application/container";
import { IProduct } from "@core/products/entities/Product";
import { IUpdateProductInput } from "@core/products/usecases/dto/UpdateProductInput";
import { UpdateProductUseCase } from "@core/products/usecases/UpdateProductUseCase";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const updateProductUseCase = container.get(UpdateProductUseCase);

export const useUpdateProduct = () => {
  const { data, error, isLoading, mutate } = useBaseMutation<
    IProduct,
    Error,
    IUpdateProductInput
  >({
    mutationFn: async (mutationData) => {
      return updateProductUseCase.execute(mutationData);
    },
  });

  return { data, error, isLoading, mutate };
};
