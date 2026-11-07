
import { test, expect } from '@playwright/test';

const URL = 'https://www.automationexercise.com/';

// TC01 - Verificar título de la página
test('TC01 - Verificar título de la página principal', async ({ page }) => {

  await page.goto(URL);

  await expect(page).toHaveTitle(/Automation Exercise/);

});

// TC02 - Navegar a la sección de productos
test('TC02 - Navegar a la sección Products', async ({ page }) => {

  await page.goto(URL);

  // Localizador por texto
  await page.getByText('Products', { exact: true }).click();

  await expect(page).toHaveURL(/products/);

});

// TC03 -  Buscar un producto
test('TC03 - Buscar un producto', async ({ page }) => {

  await page.goto(URL);

  await page.getByText('Products', { exact: true }).click();

  // Localizador CSS
  await page.locator('#search_product').fill('Blue Top');

  await page.locator('#submit_search').click();

  await expect(page.getByText('Searched Products')).toBeVisible();

  await expect(page.getByText('Blue Top', { exact: true })).toBeVisible();

});

// TC04 - Agregar un producto al carrito
test('TC04 - Agregar producto al carrito', async ({ page }) => {

  await page.goto(URL);

  await page.getByText('Products', { exact: true }).click();

  // Localizador CSS
  const producto = page.locator('.productinfo').filter({
    hasText: 'Blue Top'
  });

  await producto.getByText('Add to cart').click();

  await expect(page.getByText('Added!')).toBeVisible();

});

// TC05 - Validar producto en el carrito
test('TC05 - Validar producto en el carrito', async ({ page }) => {

  await page.goto(URL);

  await page.getByText('Products', { exact: true }).click();

  const producto = page.locator('.productinfo').filter({
    hasText: 'Blue Top'
  });

  await producto.getByText('Add to cart').click();

  // Ir al carrito
  await page.getByText('View Cart').click();

  // Validar que el producto esté en el carrito
  await expect(page.getByText('Blue Top', { exact: true })).toBeVisible();

});
