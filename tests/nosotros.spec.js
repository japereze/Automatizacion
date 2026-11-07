import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mentetester.com/');
  await page.locator('body').press('NumLock');

  await page.locator('body').press('NumLock');
  await page.getByTestId('mt-nav-nosotros').click();
  await page.locator('body').press('NumLock');
 
  await page.locator('body').press('NumLock');
  await page.getByTestId('mt-card-include-0').getByRole('heading', { name: 'Clases en vivo' }).click();
  await page.locator('div').filter({ hasText: 'Redes Sociales Sigue a Mente' }).nth(2).click();
  await page.getByRole('link', { name: 'Ver programas' }).click();
  await page.getByTestId('mt-nav-nosotros').click();
});