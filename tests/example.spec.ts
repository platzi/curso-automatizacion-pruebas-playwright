import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  await page.goto('https://codepen.io/');
  await page.locator('nav[role="navigation"]:has-text("Try Our Online EditorStart CodingSearch PensChallengesSparkCodePen Your new deve")').getByRole('link', { name: 'Challenges' }).click();
  await expect(page).toHaveURL('https://codepen.io/challenges');
});