import { test, expect } from '@playwright/test';

test('login
await page.locator('#profile-dropdown-right__BV_toggle_').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5003/');
  await page.locator('[id="userName"]').click();
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('esraa y test');
  await page.getByPlaceholder('User Name').press('Enter');]')'.c
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345');
  await page.getByPlaceholder('Password').press('Enter');
  await page.goto('http://dev-testing.andalusiagroup.net:5003/dashboard');click();
});