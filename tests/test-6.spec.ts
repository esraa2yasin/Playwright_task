import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5003/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('esraa y test');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();
  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00128095ALX');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.locator('.col-md-4').first().click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
});