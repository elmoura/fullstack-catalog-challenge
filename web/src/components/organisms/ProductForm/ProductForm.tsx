import { FunctionComponent } from "react";
import { IProduct } from "@core/products/entities/Product";
import { CreateProductInput } from "@core/products/usecases/dto/CreateProductInput";
import { useCreateProduct } from "@application/api/products/hooks/useCreateProduct";
import { useUpdateProduct } from "@application/api/products/hooks/useUpdateProduct";
import { InputField } from "@components/molecules/FormComponents/InputField";
import { Button } from "@components/atoms/Button";
import { useProductForm, productFormFields } from "./hooks/useProductForm";

export type Props = {
  product?: IProduct;
  onSubmit: (product: IProduct) => void;
};

export const ProductForm: FunctionComponent<Props> = ({
  product,
  onSubmit,
}) => {
  const { handleSubmit, control } = useProductForm();
  const { mutate: createProduct, isLoading: isLoadingCreation } =
    useCreateProduct({
      onSuccess: (createdProduct) => onSubmit(createdProduct),
    });
  const { mutate: updateProduct, isLoading: isLoadingUpdate } =
    useUpdateProduct({
      onSuccess: (updatedProduct) => onSubmit(updatedProduct),
    });

  const onFormSubmission = async (formData: CreateProductInput) => {
    if (product) {
      updateProduct({ ...formData, productId: product._id });
    } else {
      createProduct(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmission)} className="grid gap-y-3">
      <InputField
        required
        label="Nome"
        controllerProps={{
          control,
          defaultValue: product?.name,
          name: productFormFields.name,
        }}
      />

      <InputField
        required
        label="Descrição"
        controllerProps={{
          control,
          defaultValue: product?.description,
          name: productFormFields.description,
        }}
      />

      <InputField
        required
        type="number"
        label="Preço"
        maxLength={9}
        placeholder="19.90"
        controllerProps={{
          control,
          defaultValue: product?.price,
          name: productFormFields.price,
        }}
      />

      <InputField
        required
        label="Imagem (URL)"
        type="url"
        placeholder="https://url-da-sua-imagem.com"
        controllerProps={{
          control,
          defaultValue: product?.imageUrl,
          name: productFormFields.imageUrl,
        }}
      />

      <Button
        htmlType="submit"
        disabled={isLoadingCreation || isLoadingUpdate}
        className="mt-5"
      >
        Salvar
      </Button>
    </form>
  );
};
