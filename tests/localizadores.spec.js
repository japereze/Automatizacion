
import { test, expect } from '@playwright/test';

test('Localizar contraseña de 3 formas', async ({ page }) => {

    await page.goto('https://mentetester.com/login');

    //1: getByLabel
    //const password1 = page.getByLabel('Contraseña');
    //await expect(password1).toBeVisible();

    //2 getbyplaceholder
    //const password2 = page.getByPlaceholder('Contraseña');
    //await expect(password2).toBeVisible();

    //3 locator
    const password3 = page.locator('input[type="password"]');
    await expect(password3).toBeVisible();

});