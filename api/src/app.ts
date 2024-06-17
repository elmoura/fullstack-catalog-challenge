import "reflect-metadata";
import Koa from "koa";
import cors from "@koa/cors";
import { koaBody } from "koa-body";
import { connectToDatabase } from "@config/mongo-connection";
import { appContainer } from "@application/app-container";
import { router } from "./routes";
import { httpErrorHandler } from "@common/utils/error-handler";

connectToDatabase();

const app = new Koa();

appContainer.load();

app.use(cors());
app.use(koaBody());
app.use(httpErrorHandler);
app.use(router.routes());
app.use(router.allowedMethods());

export { app };
