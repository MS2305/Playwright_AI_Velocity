// spec: plan/login-test-plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Functionality', () => {
  test('Login with Empty Email Field', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to https://velocity.vel-qa1.ey.com/login
    await loginPage.navigate();
    await loginPage.expectLoginPageLoaded();

    // 2. Leave the email field blank
    await loginPage.expectEmailValue('');

    // 3. Click the 'Login' button
    await loginPage.clickLogin();
    await loginPage.expectErrorMessage('Please enter your e-mail id to continue');

  });
});