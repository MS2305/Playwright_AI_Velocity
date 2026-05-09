import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://example.com',
  },
  testDir: './tests',
});