import { test, expect, type Page, type Locator } from '@playwright/test';

export class AboutSevenDriversPage {
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
    await expect((this.pageTitle).first()).toBeVisible();
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