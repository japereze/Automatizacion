import { test, expect } from "@playwright/test";

//Ejercicio 1

test("filtra programas por Automatización con esperas automáticas", async ({
  page,
}) => {
  await page.goto("https://mentetester.com/");

  // click() espera automáticamente a que el enlace esté listo.
  await page.getByTestId("mt-link-hero-primary").click();
  await expect(page).toHaveURL(/\/programas$/);

  const filtro = page.getByTestId("mt-filter-programs-automation");
  await expect(filtro).toBeVisible();
  await filtro.click();

  // Verifica que se mostró el curso de Automatización y se ocultó QA Manual.
  await expect(page).toHaveURL(/filter=automation/);
  await expect(page.locator("#mt-course-card-course-automation")).toBeVisible();
  await expect(page.locator("#mt-course-card-course-manual")).toHaveCount(0);
});

//Ejercicio 2

test("waitForSelector espera que aparezca la tarjeta de Automatización", async ({
  page,
}) => {
  await page.goto("https://mentetester.com/programas");

  await page.getByTestId("mt-filter-programs-automation").click();

  const tarjeta = await page.waitForSelector(
    "#mt-course-card-course-automation",
    { state: "visible", timeout: 10_000 },
  );

  expect(tarjeta).not.toBeNull();
  await expect(page).toHaveURL(/filter=automation/);
  await expect(page.locator("#mt-course-card-course-manual")).toHaveCount(0);
});

//Ejercicio 3

test("waitForTimeout pausa 2 segundos antes de revisar la página", async ({
  page,
}) => {
  await page.goto("https://mentetester.com/", {
    waitUntil: "domcontentloaded",
  });

  // La prueba espera 2.000 milisegundos.
  await page.waitForTimeout(2_000);

  // Comprueba que el enlace principal esté visible después de la pausa.
  await expect(page.getByTestId("mt-link-hero-primary")).toBeVisible();
});

//Ejercicio 4

// Define la primera prueba: usa una pausa de duración fija.
test("espera fija con waitForTimeout()", async ({ page }) => {
  // Abre el sitio y espera a que el HTML inicial esté procesado.
  await page.goto("https://mentetester.com/", {
    waitUntil: "domcontentloaded",
  });

  // Pausa la prueba durante 2.000 milisegundos (2 segundos).
  await page.waitForTimeout(2_000);

  // Comprueba que el enlace principal esté visible.
  await expect(page.getByTestId("mt-link-hero-primary")).toBeVisible();
});

// Define la segunda prueba: espera por una condición del elemento.
test("espera hasta que el enlace esté visible", async ({ page }) => {
  // Abre el sitio y espera a que el HTML inicial esté procesado.
  await page.goto("https://mentetester.com/", {
    waitUntil: "domcontentloaded",
  });

  // Espera hasta que el enlace principal esté visible y lo comprueba.
  await expect(page.getByTestId("mt-link-hero-primary")).toBeVisible();
});

//Ejercicio 5

// Define una prueba y recibe `page`, que representa la pestaña del navegador.
test("abre la página y guarda una captura de pantalla", async ({ page }) => {
  // Navega al sitio web.
  await page.goto("https://mentetester.com/");

  // Espera y comprueba que el enlace principal esté visible.
  await expect(page.getByTestId("mt-link-hero-primary")).toBeVisible();

  // Guarda una captura de pantalla completa de la página en esta ruta.
  await page.screenshot({ path: "captures/screenshop.png", fullPage: true });
});

//Ejercicio 6 

// Define una prueba y recibe `page`, que representa la pestaña del navegador.
test("graba un video mientras navega a Programas", async ({ page }) => {
  // Abre la página de Mente Tester.
  await page.goto("https://mentetester.com/");

  // Hace clic en el enlace principal que lleva a Programas.
  await page.getByTestId("mt-link-hero-primary").click();

  // Comprueba que la URL termine en /programas.
  await expect(page).toHaveURL(/\/programas$/);

  // Busca el encabezado “Elige tu ruta en QA” y comprueba que esté visible.
  await expect(
    page.getByRole("heading", { name: "Elige tu ruta en QA" }),
  ).toBeVisible();
});
