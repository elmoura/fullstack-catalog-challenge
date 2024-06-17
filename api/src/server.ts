import "module-alias/register";
import "tsconfig-paths/register";
import { envConfig } from "@config/env";
import { app } from "./app";

app.listen(envConfig.appPort, () => {
  console.log(`API running at port ${envConfig.appPort}`);
});
