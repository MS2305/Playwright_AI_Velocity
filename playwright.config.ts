import { defineConfig } from '@playwright/test';
const timestamp = new Date().toISOString().replace(/[:.]/g, '-'); // for creating dynamic report folders
const runId = Date.now();// for creating dynamic report folders, but the folder id not contains the date so using the previous one.

export default defineConfig({
  use: {
    screenshot: 'on',
    headless: false,
    viewport: { width: 1280, height: 720 },
    baseURL: 'https://example.com',
    },
  testDir: './tests',
  reporter: [['html', { outputFolder: `./playwright-report/playwright-report-${timestamp}` }]],
});