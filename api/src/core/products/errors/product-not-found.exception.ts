import { InvalidClientDataException } from "@common/exceptions/invalid-client-data.exception";

export class ProductNotFoundException extends InvalidClientDataException {
  constructor(messages = ["Product not found"]) {
    super(messages);
  }
}
