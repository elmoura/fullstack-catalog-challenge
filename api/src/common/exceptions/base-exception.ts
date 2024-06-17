import { ExceptionReasons } from "./exception-reasons.enum";

export class BaseException extends Error {
  reason: ExceptionReasons;
  messages: string[];

  constructor(messages: string[]) {
    super(messages?.join(","));
  }
}
