import * as fs from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: "iife",
  minify: true,
  async onSuccess() {
    const path = "./dist/index.global.js";
    const text = fs.readFileSync(path, "utf-8");
    const modified = `javascript:${text}`;
    fs.writeFileSync(path, modified);
  },
});
