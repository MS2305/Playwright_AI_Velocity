// spec: plan/login-test-plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Login Functionality', () => {
  test('Login with Non-EY Email', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to https://velocity.vel-qa1.ey.com/login
    await loginPage.navigate();
    await loginPage.expectLoginPageLoaded();

    // 2. Enter 'test@gmail.com' in the email field
    await loginPage.enterEmail('test@gmail.com');
    await loginPage.expectEmailValue('test@gmail.com');

    // 3. Click the 'Login' button
    await loginPage.clickLogin();
    await loginPage.expectErrorMessage('Could not find a user with e-mail id test@gmail.com');
  
  });
});