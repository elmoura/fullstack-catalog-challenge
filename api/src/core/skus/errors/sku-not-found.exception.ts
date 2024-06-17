import { InvalidClientDataException } from "@common/exceptions/invalid-client-data.exception";

export class SkuNotFoundException extends InvalidClientDataException {
  constructor(messages = ["SKU not found."]) {
    super(messages);
  }
}
