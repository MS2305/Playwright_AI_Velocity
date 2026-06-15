// spec: plan/buyer-based-fields-of-play.md
// seed: tests/seed.spec.ts

import { test, expect, type Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

class BuyerBasedFieldsOfPlayPage {
  readonly focusMenu;
  readonly buyerBasedFieldsOfPlayLink;

  constructor(private page: Page) {
    this.focusMenu = page.locator('a.dropdown-toggle.nav-link', { hasText: 'Focus' }).first();
    this.buyerBasedFieldsOfPlayLink = page.locator('ul.dropdown-menu.dropdown-menu-left a.nav-link', { hasText: 'Buyer-based Fields of Play' }).first();
  }

  async clickFocusMenu() {
    await this.focusMenu.click();
    await expect(this.buyerBasedFieldsOfPlayLink).toBeVisible({ timeout: 10000 });
  }

  async clickBuyerBasedFieldsOfPlaySubmenu() {
    await this.buyerBasedFieldsOfPlayLink.click();
  }

  async expectPageLoaded() {
    await expect(this.page).toHaveURL(/\/focus\/fop/);
    await expect(this.page.getByText('Visit Fields of Play website to learn more about relevant EY Solutions per Fields of Play.', { exact: true })).toBeVisible({ timeout: 10000 });
  }
}

test.describe('Buyer-based Fields of Play Flow', () => {
  test('Focus menu to Buyer-based Fields of Play', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const buyerBasedFieldsPage = new BuyerBasedFieldsOfPlayPage(page);

    // 1. Navigate to https://velocity.vel-qa1.ey.com/login
    await loginPage.navigate();
    await loginPage.expectLoginPageLoaded();

    // 2. Enter 'meenakshi.sundaram.s@ey.com' and submit the login form
    await loginPage.enterEmail('meenakshi.sundaram.s@ey.com');
    await loginPage.clickLogin();
    await dashboardPage.expectDashboardLoaded();
    await dashboardPage.expectWelcomeMessage('Meenakshi Sundaram S');

    // Accept cookies prompt if presented
    await dashboardPage.clickYesToAccept();

    // 3. Click the 'Focus' menu in the top navigation
    await buyerBasedFieldsPage.clickFocusMenu();

    // 4. Select 'Buyer-based Fields of Play' from the Focus menu
    await buyerBasedFieldsPage.clickBuyerBasedFieldsOfPlaySubmenu();

    // 5. Verify the Buyer-based Fields of Play landing page
    await buyerBasedFieldsPage.expectPageLoaded();
  });
});
