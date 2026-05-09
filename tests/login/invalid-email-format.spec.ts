// spec: plan/login-test-plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Functionality', () => {
  test('Login with Invalid Email Format', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to https://velocity.vel-qa1.ey.com/login
    await loginPage.navigate();
    await loginPage.expectLoginPageLoaded();

    // 2. Enter 'invalidemail' in the email field
    await loginPage.enterEmail('invalidemail');
    await loginPage.expectEmailValue('invalidemail');

    // 3. Click the 'Login' button
    await loginPage.clickLogin();
    await loginPage.expectErrorMessage('Please enter your e-mail id to continue');
      });
});