import { test, expect } from "@playwright/test";

// Ejercicio 5
test("abre la página y guarda una captura de pantalla", async ({
  page,
}, testInfo) => {
  await page.goto("https://mentetester.com/");

  await expect(page.getByTestId("mt-link-hero-primary")).toBeVisible();

  const ruta = testInfo.outputPath("evidencia-login.png");

  await page.screenshot({ path: ruta, fullPage: true });

  await testInfo.attach("login-fullpage", {
    path: ruta,
    contentType: "image/png",
  });
});
