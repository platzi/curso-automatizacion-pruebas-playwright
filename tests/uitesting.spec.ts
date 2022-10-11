import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('about:blank');

  await page.goto('http://uitestingplayground.com/');

  await page.getByText('Aristte').click();

  await page.getByRole('link', { name: 'Resources' }).click();
  await expect(page).toHaveURL('http://uitestingplayground.com/resources');

  await page.getByRole('link', { name: 'Home' }).click();
  await expect(page).toHaveURL('http://uitestingplayground.com/home');

  await page.getByRole('link', { name: 'Click' }).click();
  await expect(page).toHaveURL('http://uitestingplayground.com/click');

  await page.getByRole('button', { name: 'Button That Ignores DOM Click Event' }).click();

});