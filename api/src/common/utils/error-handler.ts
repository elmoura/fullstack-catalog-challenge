import { Context, Next } from "koa";
import { ExceptionReasons } from "@common/exceptions/exception-reasons.enum";

const exceptionReasonsToStatusCodes: Record<ExceptionReasons, number> = {
  [ExceptionReasons.INVALID_CLIENT_DATA]: 400,
};

export const httpErrorHandler = async (ctx: Context, next: Next) => {
  try {
    await next();
  } catch (err) {
    if (err.code === "ENOENT") ctx.status = 404;
    else {
      ctx.status = err?.reason
        ? exceptionReasonsToStatusCodes[err?.reason] || 500
        : 500;
    }

    ctx.status === 500 && console.error(err);

    ctx.body = {
      messages: err?.messages || "Internal Server Error",
    };
  }
};
