import { container } from "@application/container";
import { IProduct } from "@core/products/entities/Product";
import { IUpdateProductInput } from "@core/products/usecases/dto/UpdateProductInput";
import { UpdateProductUseCase } from "@core/products/usecases/UpdateProductUseCase";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const updateProductUseCase = container.get(UpdateProductUseCase);

type Params = {
  onSuccess?: (data: IProduct) => void;
};

export const useUpdateProduct = ({ onSuccess }: Params) => {
  const { data, error, isLoading, mutate } = useBaseMutation<
    IProduct,
    Error,
    IUpdateProductInput
  >({
    mutationFn: async (mutationData) => {
      return updateProductUseCase.execute(mutationData);
    },
    onSuccess,
  });

  return { data, error, isLoading, mutate };
};
