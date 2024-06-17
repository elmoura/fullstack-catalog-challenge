import { validate } from "class-validator";
import { plainToInstance } from "class-transformer";
import { mapClassValidatorConstraints } from "./map-class-validator-constraints";
import { InvalidClientDataException } from "@common/exceptions/invalid-client-data.exception";

export const validateInput = async (data: Record<any, any>, dto: any) => {
  const validationErrors = await validate(plainToInstance(dto, data));

  if (validationErrors.length) {
    const errorMessages = mapClassValidatorConstraints(validationErrors);
    throw new InvalidClientDataException(errorMessages);
  }
};
