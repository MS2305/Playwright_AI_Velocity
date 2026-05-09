// spec: plan/login-test-plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';

test.describe('Login Functionality', () => {
  test('Successful Login with Valid Email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // 1. Navigate to https://velocity.vel-qa1.ey.com/login
    await loginPage.navigate();
    await loginPage.expectLoginPageLoaded();

    // 2. Enter 'meenakshi.sundaram.s@ey.com' in the email field
    await loginPage.enterEmail('meenakshi.sundaram.s@ey.com');
    await loginPage.expectEmailValue('meenakshi.sundaram.s@ey.com');

    // 3. Click the 'Login' button
    await loginPage.clickLogin();
    await dashboardPage.expectDashboardLoaded();
    await dashboardPage.expectWelcomeMessage('Meenakshi Sundaram S');

    // 4. Click the profile icon to display the logout option
    await loginPage.ClickProfileIcon();
    await loginPage.expectLogoutOptionVisible();

    // 5. Click the Logout option
    await loginPage.clickLogout();
    await loginPage.expectLoggedOut();
  });
});