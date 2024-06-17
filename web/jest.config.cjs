/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require("ts-jest");
const tsConfig = require("./tsconfig.json");

/** @type {import('jest').Config} */
module.exports = {
  verbose: true,
  preset: "ts-jest",
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/setup.test.js"],
  testMatch: ["**/*.test.tsx", '"**/*.spec.tsx"'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(tsConfig.compilerOptions.paths),
    "\\.(gif|ttf|eot|svg|png|css|less|scss|sass)$":
      "<rootDir>/src/__mocks__/fileMock.ts",
  },
};
