import { test, expect } from "@playwright/test";

test("Practicar todos los Locators", async ({ page }) => {
  await page.goto("file:///C:/Users/HP/Documents/ejemplo/tests/web01.html");

  // 1. getByRole()
  await page
    .getByRole("button", {
      name: "Registrarse",
    })
    .click();

  // 2. getByText()
  await expect(
    page.getByText("¡Bienvenido! Gracias por registrarte"),
  ).toBeVisible();

  // 3. getByLabel()
  await page.getByLabel("Nombre").fill("Jose Armando");

  // 4. getByPlaceholder()
  await page
    .getByPlaceholder("Introduce tu correo")
    .fill("j_armando@hotmail.es");

  // 5. getByTestId()
  await expect(page.getByTestId("registro-button")).toBeVisible();

  // 6. locator() - CSS
  await page.locator("#password").fill("123456789");

  // 7. XPath
  await page.locator('xpath=//input[@id="terminos"]').check();

  await expect(page.getByLabel("Nombre")).toHaveValue("Jose Armando");

  await expect(page.getByLabel("Correo electrónico")).toHaveValue(
    "j_armando@hotmail.es",
  );

  await expect(page.locator("#password")).toHaveValue("123456789");

  await expect(
    page.getByLabel("Acepto los términos y condiciones"),
  ).toBeChecked();
});
