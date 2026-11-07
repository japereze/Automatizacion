import { test } from "@playwright/test";

test("Validar login con credenciales correctas", async ({ page }) => {
  // Abrir página de Login
  await page.goto("https://mentetester.com/login");

  // Digital el campo Email
  await page.getByTestId("mt-input-login-email").fill("j_armando@hotmail.es");

  // Digita  el campo Contraseña
  await page.getByTestId("mt-input-login-password").fill("123456");

  await page.getByTestId("mt-button-login-submit").click();
});
