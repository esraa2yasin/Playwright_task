import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5003/physicianDesktop');
  await page.goto('http://dev-testing.andalusiagroup.net:5003/');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('esraa y test');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('12345');
  await page.getByPlaceholder('Password').press('Enter');
  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('esraa y ');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('esraa y ');
  await page.getByText('esraa y ipd visit').first().click();
  await page.getByText('44 Y').click();
  await page.getByRole('button', { name: '' }).click();
  await page.locator('.col-md-11 > div:nth-child(3)').click();
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();
  await page.getByText('Patient Problems').click();
  await page.getByRole('button', { name: ' New Diagnosis' }).click();
  await page.getByPlaceholder('Search Diagnosis').click();
  await page.getByPlaceholder('Search Diagnosis').fill('00.0');
  await page.getByText('A00 - Cholera').click();
  await page.getByRole('button', { name: 'Save' }).click();
});