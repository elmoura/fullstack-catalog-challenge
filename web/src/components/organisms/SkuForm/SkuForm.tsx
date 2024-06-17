import { FunctionComponent } from "react";
import { InputField } from "@components/molecules/FormComponents/InputField";
import { ISku } from "@core/skus/entities/Sku";
import { useUpdateSku } from "@application/api/skus/hooks/useUpdateSku";
import {
  CreateSkuForm,
  createSkuFormFields,
} from "./hooks/forms/CreateSkuForm";
import { useCreateSkuForm } from "./hooks/useCreateSkuForm";
import { Button } from "@components/atoms/Button";
import { useCreateSku } from "@application/api/skus/hooks/useCreateSku";

type Props = {
  productId: string;
  sku?: ISku;
  onSubmit: () => void;
};

export const SkuForm: FunctionComponent<Props> = ({
  productId,
  sku,
  onSubmit,
}) => {
  const { control, handleSubmit } = useCreateSkuForm();
  const { mutate: createSku, isLoading: isLoadingProductCreation } =
    useCreateSku();
  const { mutate: updateSku, isLoading: isLoadingProductUpdate } =
    useUpdateSku();

  const onFormSubmission = (data: CreateSkuForm) => {
    if (sku?._id) {
      updateSku({
        ...data,
        productId,
        skuId: sku._id,
      });
    } else {
      createSku({ ...data, productId });
    }
    setTimeout(() => onSubmit(), 100);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmission)} className="grid gap-y-3">
      <InputField
        required
        label="Identificador"
        placeholder="Ex.: P (tamanho), Azul (cor), etc."
        controllerProps={{
          control,
          defaultValue: sku?.identifier,
          name: createSkuFormFields.identifier,
        }}
      />
      <InputField
        required
        label="Descrição"
        controllerProps={{
          control,
          defaultValue: sku?.description,
          name: createSkuFormFields.description,
        }}
      />
      <InputField
        label="EAN"
        controllerProps={{
          control,
          defaultValue: sku?.ean,
          name: createSkuFormFields.ean,
        }}
      />
      <InputField
        type="number"
        label="Preço"
        maxLength={6}
        placeholder="19.90"
        controllerProps={{
          control,
          defaultValue: sku?.price,
          name: createSkuFormFields.price,
        }}
      />

      <Button
        htmlType="submit"
        className="mt-5"
        disabled={isLoadingProductCreation || isLoadingProductUpdate}
      >
        Salvar
      </Button>
    </form>
  );
};
