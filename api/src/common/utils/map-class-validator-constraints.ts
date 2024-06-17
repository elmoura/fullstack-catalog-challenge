import { ValidationError } from "class-validator";

export const mapClassValidatorConstraints = (
  errors: ValidationError[]
): string[] => {
  const messages = [];

  errors.forEach((error) => {
    error?.constraints && messages.push(...Object.values(error.constraints));
  });

  return messages;
};
