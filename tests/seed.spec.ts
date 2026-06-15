import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    // generate code here.
    await page.goto('https://velocity.vel-qa1.ey.com/login');
    await page.getByRole('textbox').fill('meenakshi.sundaram.s@ey.com');  
    await page.getByRole('button', { name: 'Login' }).nth(0).click();
    await expect(page).toHaveURL('https://velocity.vel-qa1.ey.com/dashboard');
    await expect(page.getByText('Welcome back, Meenakshi Sundaram S')).toBeVisible(); 
  });
});
