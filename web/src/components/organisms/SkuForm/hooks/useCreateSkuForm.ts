import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { CreateSkuForm } from "./forms/CreateSkuForm";

export const useCreateSkuForm = () => {
  const form = useForm<CreateSkuForm>({
    resolver: classValidatorResolver(CreateSkuForm),
  });

  return form;
};
