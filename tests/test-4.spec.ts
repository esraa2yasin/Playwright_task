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

//go to Portal Successfully
   // await page.locator('[class="hide-scroll"]').click();
    await page.goto('http://dev-testing.andalusiagroup.net:5003/physicianDesktop');
  
    //should can Capture patient

 // await page.locator('[class="bg-grey-lt btn capture-btn p-0 rounded-lg"]').click();
  //await page.locator('').fill('00128095ALX');
  
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'portal Portal' }).click();
  // await page.locator('#target div').nth(1).click();
  // await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00128095ALX');
  // await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  // page.setDefaultTimeout(350000);
  // const gridRows:any = await page.$$('#PatientList .k-grid-content tr')
  // console.log(gridRows.length)
  // if(gridRows.length > 0){
  //   await gridRows[0].$$('td').click()
  // }

  // //await page.locator('#PatientList .k-grid-content tr td').first().click();
  // await page.getByRole('button', { name: 'Capture Patient' }).click();


  await page.locator('#target div').nth(1).click();
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').fill('00128095ALX');
  await page.getByPlaceholder('Search For Patient (Name, Code, Phone Number)').press('Enter');
  await page.pause();
  //await page.locator('.col-md-6').first().click();
  //await page.locator('.col-md-4').click();
  //await page.getByRole('link').nth(1).click();
  //await page.getByRole('link', { name: 'portal Portal' }).click();
  //await page.getByRole('button', { name: 'Capture Patient' }).click();





});
  

  
  //should go to Patient Problems
  
  
  //should can add diagnosis
  
  
  //should Send service

})
