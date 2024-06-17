import "dotenv/config";

export const envConfig = {
  appPort: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
};
