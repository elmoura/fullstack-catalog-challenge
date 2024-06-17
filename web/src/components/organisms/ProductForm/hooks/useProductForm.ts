import { useForm } from "react-hook-form";
import { CreateProductInput } from "@core/products/usecases/dto/CreateProductInput";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";

export const productFormFields: Record<
  keyof CreateProductInput,
  keyof CreateProductInput
> = {
  name: "name",
  description: "description",
  price: "price",
  imageUrl: "imageUrl",
};

export const useProductForm = () => {
  const form = useForm<CreateProductInput>({
    resolver: classValidatorResolver(CreateProductInput),
  });

  return form;
};
