import { container } from "@application/container";
import { IProduct } from "@core/products/entities/Product";
import { CreateProductUseCase } from "@core/products/usecases/CreateProductUseCase";
import { CreateProductInput } from "@core/products/usecases/dto/CreateProductInput";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const createProductUseCase = container.get(CreateProductUseCase);

export const useCreateProduct = () => {
  const { data, error, isLoading, mutate } = useBaseMutation<
    IProduct,
    Error,
    CreateProductInput
  >({
    mutationFn: async (mutationData) => {
      return createProductUseCase.execute(mutationData);
    },
  });

  return { data, error, isLoading, mutate };
};
