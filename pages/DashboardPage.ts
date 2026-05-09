import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async expectDashboardLoaded() {
    await expect(this.page).toHaveURL('https://velocity.vel-qa1.ey.com/dashboard');
  }

  async expectWelcomeMessage(user: string) {
    await expect(this.page.getByText(`Welcome back, ${user}`)).toBeVisible();
  }
}