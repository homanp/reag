import type { Config } from "jest";
import "dotenv/config";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  verbose: true,
  clearMocks: true,
  resetMocks: true,
};

export default config;
