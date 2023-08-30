import { test, expect } from '@playwright/test';

test.describe ('test suit',() => {
  test('login', async ({ page }) => {
    await page.goto('http://dev-testing.andalusiagroup.net:5003/');
    await page.locator ('#userName').click();
    await page.locator ('#userName').fill('esraa y test');
    //await page.getByPlaceholder('User Name').press('Tab');
    await page.locator ('#password').waitFor({ state: 'visible' });
    await page.locator ('#password').click();
    await page.locator ('#password').clear();
    await page.locator ('#password').fill('12345');
   // await page.locator('Password').press('Enter');
    await page.locator('[Class="btn btn-block submit-btn"]').click();
    await expect (page).toHaveURL(/.*dashboard/);
    //await page.pause()

    //SHould go to Portal
    //should capture patient
   // test('Capture  patient',()=> {})
  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00128095ALX');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.locator('.col-md-6').first().click();
  await page.locator('.col-md-4').click();
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();
  await page.getByRole('button', { name: 'Capture Patient' }).click();


  //should go to patient problem
 await page.getByText('patient problems').click();
//await page.locator('button',@class="menu-name">Patient Problem');
 //should can add diagnosis
  await page.locator('[class="btn btn-txt-blue"]').click();
  await page.getByPlaceholder('Search Diagnosis').click();
  await page.getByPlaceholder('Search Diagnosis').fill('00.0');
  await page.getByText('A00 - Cholera').click();
  await page.getByRole('button', { name: 'Save' }).click();






});
  

  
  
});