import { container } from "@application/container";
import { DeleteProductUseCase } from "@core/products/usecases/DeleteProductUseCase";
import { useBaseMutation } from "@utils/hooks/useBaseMutation";

const deleteProductUseCase = container.get(DeleteProductUseCase);

type Params = {
  productId: string;
};

export const useDeleteProduct = ({ productId }: Params) => {
  if (!productId) {
    throw new Error(
      "productId not provided. productId is required for useDeleteProduct hook."
    );
  }

  const { mutate, data, error, isLoading } = useBaseMutation<
    void,
    Error,
    { productId: string }
  >({
    mutationFn: async (data) => {
      await deleteProductUseCase.execute(data.productId);
    },
  });

  return { mutate, data, error, isLoading };
};
