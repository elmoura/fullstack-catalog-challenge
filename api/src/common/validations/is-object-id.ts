import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";
import { isValidObjectId } from "mongoose";

@ValidatorConstraint()
export class IsObjectId implements ValidatorConstraintInterface {
  validate(value: string, validationArguments?: ValidationArguments): boolean {
    return isValidObjectId(value);
  }

  defaultMessage(validationArguments?: ValidationArguments): string {
    return `${validationArguments.targetName} should be an ObjectId.`;
  }
}
