import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://mentetester.com/');
  await page.getByTestId('mt-button-login').click();
  await page.locator('body').press('NumLock');
  await page.locator('body').press('NumLock');
  await page.getByTestId('mt-input-login-email').click();
  await page.getByTestId('mt-input-login-email').click();
  await page.getByTestId('mt-input-login-email').fill('j_armando@hotmail.es');
  await page.getByTestId('mt-input-login-password').click();
  await page.getByTestId('mt-input-login-password').click();
  await page.getByTestId('mt-input-login-password').fill('123456');
  await page.getByTestId('mt-button-login-submit').click();
  await page.getByTestId('mt-nav-programas').click();
  await page.locator('body').press('NumLock');
  await page.locator('body').press('NumLock');
  await page.getByTestId('mt-nav-temario').click();
  await page.getByTestId('mt-nav-nosotros').click();
  await page.getByTestId('mt-nav-testimonios').click();
  await page.locator('body').press('NumLock');
  await page.locator('body').press('NumLock');
  await page.getByTestId('mt-nav-qa-lab').click();
  await page.getByTestId('mt-button-logout').click();
});