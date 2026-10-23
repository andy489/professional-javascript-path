import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // logic.js will hold the save-and-load code, and plain Node has no
    // localStorage — jsdom provides it.
    environment: "jsdom",
  },
});
