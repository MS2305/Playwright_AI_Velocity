// spec: plan/About_7_drivers.md
// seed: tests/seed.spec.ts

import { test, expect, type Page, type Locator } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

class AboutSevenDriversPage {
  readonly focusMenu: Locator;
  readonly aboutSevenDriversLink: Locator;
  readonly nextButton: Locator;
  readonly pageTitle: Locator;

  constructor(private page: Page) {
    this.focusMenu = page.locator('a.dropdown-toggle.nav-link', { hasText: 'Focus' });
    this.aboutSevenDriversLink = page.locator("(//span[normalize-space(text())='About 7 Drivers'])[1]");
    this.nextButton = page.locator('button', { hasText: 'Next' });
    this.pageTitle = page.getByText('EY 7 Drivers of Growth').nth(0);
  }

  async clickFocusMenu() {
    await this.focusMenu.click();
  }

  async clickAboutSevenDriversSubmenu() {
    await this.aboutSevenDriversLink.click();
  }

  async expectAboutPageLoaded() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.page).toHaveURL(/\/focus\/about-seven-drivers$/);
  }

  async clickNext() {
    await this.nextButton.click();
    await expect(this.page).toHaveURL(/\/focus\/about-seven-drivers\/steps/);
  }

  async expectStepLabelVisible(step: string) {
    await expect(this.page.locator('div.step-title', { hasText: step })).toBeVisible();
  }

  async clickStepTitle(step: string) {
    await this.page.locator('div.step-title', { hasText: step }).click();
  }

  async expectStepTitleActive(step: string) {
    await expect(this.page.locator('div.step-title.active', { hasText: step })).toBeVisible();
  }
}

test.describe('About 7 Drivers Flow', () => {
  test('Navigate to About 7 Drivers and verify step navigation', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const aboutPage = new AboutSevenDriversPage(page);

    // 1. Navigate to https://velocity.vel-qa1.ey.com/login
    await loginPage.navigate();
    await loginPage.expectLoginPageLoaded();

    // 2. Enter 'meenakshi.sundaram.s@ey.com' and click login
    await loginPage.enterEmail('meenakshi.sundaram.s@ey.com');
    await loginPage.clickLogin();
    await dashboardPage.expectDashboardLoaded();
    await dashboardPage.expectWelcomeMessage('Meenakshi Sundaram S');

    // 3. Click the 'Focus' menu in the top navigation
    await aboutPage.clickFocusMenu();

    // 4. Click the 'About 7 Drivers' submenu link under Focus
    await aboutPage.clickAboutSevenDriversSubmenu();
    await aboutPage.expectAboutPageLoaded();

    // 5. Advance into the steps section
    await aboutPage.clickNext();

    // 6. Verify the About 7 Drivers page displays step labels: Step 1, Step 2, Step 3, Step 4
    await aboutPage.expectStepLabelVisible('Step 1');
    await aboutPage.expectStepLabelVisible('Step 2');
    await aboutPage.expectStepLabelVisible('Step 3');
    await aboutPage.expectStepLabelVisible('Step 4');

    // 7. Click the 'Step 2' step title
    await aboutPage.clickStepTitle('Step 2');
    await aboutPage.expectStepTitleActive('Step 2');

    // 8. Click the 'Step 3' step title
    await aboutPage.clickStepTitle('Step 3');
    await aboutPage.expectStepTitleActive('Step 3');

    // 9. Click the 'Step 4' step title
    await aboutPage.clickStepTitle('Step 4');
    await aboutPage.expectStepTitleActive('Step 4');
  });
});