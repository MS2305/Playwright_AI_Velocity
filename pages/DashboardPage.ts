import { Page, expect } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async expectDashboardLoaded() {
    await expect(this.page).toHaveURL('https://velocity.vel-qa1.ey.com/dashboard');
  }

  async expectWelcomeMessage(user: string) {
    await expect(this.page.getByText(`Welcome back, ${user}`)).toBeVisible();
  }

  async clickYesToAccept(){
    const acceptButton = this.page.getByRole('button', { name: 'Yes, I accept' });
    await expect(acceptButton).toBeVisible();
    await expect(acceptButton).toContainText('Yes, I accept');
    await acceptButton.click();
  }
}