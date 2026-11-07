import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // 1. Abrir la página principal de Mente Tester
  await page.goto("https://mentetester.com/");
  await page.getByTestId("mt-nav-inicio").click();

  // 2. Acceder a la sección Programas
  await page.getByTestId("mt-nav-programas").click();

  await page
    .getByTestId("mt-course-card-course-automation")
    .getByText("Formación enfocada en")
    .click();
  await page
    .getByTestId("mt-course-card-course-automation")
    .getByRole("link", { name: "Temario" })
    .click();
  await page.getByTestId("mt-nav-programas").click();
  await page
    .getByTestId("mt-course-card-course-automation")
    .getByRole("link", { name: "Horario" })
    .click();
  await page.getByTestId("mt-nav-programas").click();
  await page
    .getByTestId("mt-course-card-course-manual")
    .getByRole("heading", { name: "Programa de QA Manual" })
    .click();
  await page
    .getByTestId("mt-course-card-course-manual")
    .getByRole("link", { name: "Temario" })
    .click();
  await page.getByTestId("mt-nav-programas").click();
  await page
    .getByTestId("mt-course-card-course-manual")
    .getByRole("link", { name: "Horario" })
    .click();
});
