import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  private readonly emailInput: Locator;
  private readonly loginButton: Locator;
  private readonly profileIcon: Locator;
  private readonly logoutOption: Locator;

  constructor(private page: Page) {
    this.emailInput = page.getByRole('textbox');
    this.loginButton = page.getByRole('button', { name: 'Login' }).nth(0);
    this.profileIcon = page.locator(
      ' [class*="dropdown-toggle profile nav-link"], [data-toggle*="dropdown"]'
    ).first();
    this.logoutOption = page.getByText('Logout').nth(0);
  }

  async navigate() {
    await this.page.goto('https://velocity.vel-qa1.ey.com/login');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async ClickProfileIcon() {
    await this.profileIcon.click();
  }

  async expectLogoutOptionVisible() {
    await expect(this.logoutOption).toBeVisible();
  }

  async clickLogout() {
    await this.logoutOption.click();
  }

  async expectLoggedOut() {
    await expect(this.page).toHaveURL('https://velocity.vel-qa1.ey.com/welcome');
  }

  async expectLoginPageLoaded() {
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await expect(this.emailInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  async expectEmailValue(value: string) {
    await expect(this.emailInput).toHaveValue(value);
  }

  async expectErrorMessage(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
}