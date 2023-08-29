import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://dev-testing.andalusiagroup.net:5003/');
});