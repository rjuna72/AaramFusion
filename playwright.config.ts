import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  fullyParallel: false,
  workers: 1,
  use: { baseURL: "http://127.0.0.1:3100", browserName: "chromium", channel: "msedge", trace: "retain-on-failure" },
  webServer: { command: "npm.cmd run preview", url: "http://127.0.0.1:3100", reuseExistingServer: !process.env.CI, timeout: 30000 },
  reporter: "list",
});
