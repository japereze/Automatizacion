import { test, expect } from "@playwright/test";

test("Practicar interacciones en Mente Tester", async ({ page }) => {
  // Abrir la página
  await page.goto("https://mentetester.com/");

  // 1. CLICK
  await page.getByTestId("mt-nav-programas").click();

  // Regresar al inicio
  await page.goto("https://mentetester.com/");

  // 2. HOVER
  await page.getByTestId("mt-course-card-course-automation").hover();

  // 3. FILL
  await page.getByPlaceholder("Escribe tu pregunta") .fill("¿Cómo me inscribo al curso?");
});
