import { BaseException } from "./base-exception";
import { ExceptionReasons } from "./exception-reasons.enum";

export class InvalidClientDataException extends BaseException {
  public reason = ExceptionReasons.INVALID_CLIENT_DATA;

  constructor(public messages: string[]) {
    super(messages);
  }
}
