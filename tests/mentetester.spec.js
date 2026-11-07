const { test, expect } = require("@playwright/test");

test.describe("Mente Tester · 15 casos individuales (locator → acción)", () => {
  test("CP01 — La página de inicio presenta el titular principal", async ({
    page,
  }) => {
    await page.goto("/");
    const titular = page.getByRole("heading", { name: "De 0 a QA en 6 meses" });
    await expect(titular).toBeVisible();
  });

  test("CP02 — El CTA principal abre Programas", async ({ page }) => {
    await page.goto("/");
    const verProgramas = page.locator("#mt-link-hero-primary");
    await verProgramas.click();
    await expect(page).toHaveURL(/\/programas$/);
    await expect(
      page.getByRole("heading", { name: "Elige tu ruta en QA" }),
    ).toBeVisible();
  });

  test("CP03 — La tarjeta Práctica guiada abre su módulo", async ({ page }) => {
    await page.goto("/");
    const tarjeta = page.locator("#mt-card-home-module-practica-guiada");
    await tarjeta.click();
    await expect(page).toHaveURL(/\/practica-guiada$/);
    await expect(
      page.getByRole("heading", {
        name: "Aprende QA haciendo, no solo viendo",
      }),
    ).toBeVisible();
  });

  test("CP04 — La tarjeta Guía de temario abre su módulo", async ({ page }) => {
    await page.goto("/");
    const tarjeta = page.locator("#mt-card-home-module-temario");
    await tarjeta.click();
    await expect(page).toHaveURL(/\/temario$/);
    await expect(
      page.getByRole("heading", { name: "Lo que aprenderás semana a semana" }),
    ).toBeVisible();
  });

  test("CP05 — La tarjeta Sobre nosotros abre su módulo", async ({ page }) => {
    await page.goto("/");
    const tarjeta = page.locator("#mt-card-home-module-nosotros");
    await tarjeta.click();
    await expect(page).toHaveURL(/\/nosotros$/);
    await expect(
      page.getByRole("heading", {
        name: "Mente Tester es el aula de QA de Felix Lora",
      }),
    ).toBeVisible();
  });

  test("CP06 — La tarjeta Testimonios abre su módulo", async ({ page }) => {
    await page.goto("/");
    const tarjeta = page.locator("#mt-card-home-module-testimonios");
    await tarjeta.click();
    await expect(page).toHaveURL(/\/testimonios$/);
    await expect(
      page.getByRole("heading", {
        name: "Lo que dicen quienes estudian con nosotros",
      }),
    ).toBeVisible();
  });

  test("CP07 — La tarjeta Preguntas frecuentes abre su módulo", async ({
    page,
  }) => {
    await page.goto("/");
    const tarjeta = page.locator("#mt-card-home-module-preguntas");
    await tarjeta.click();
    await expect(page).toHaveURL(/\/preguntas$/);
    await expect(
      page.getByRole("heading", { name: "Antes de inscribirte" }),
    ).toBeVisible();
  });

  test("CP08 — La tarjeta Clase gratis abre su módulo", async ({ page }) => {
    await page.goto("/");
    const tarjeta = page.locator("#mt-card-home-module-clase-gratis");
    await tarjeta.click();
    await expect(page).toHaveURL(/\/clase-gratis$/);
    await expect(
      page.getByRole("heading", {
        name: "Mira una clase en vivo y reserva 20 minutos",
      }),
    ).toBeVisible();
  });

  test("CP09 — El filtro Automatización muestra su programa", async ({
    page,
  }) => {
    await page.goto("/programas");
    const filtro = page.locator("#mt-filter-programs-automation");
    await filtro.click();
    await expect(page).toHaveURL(/filter=automation/);
    await expect(
      page.locator("#mt-course-card-course-automation"),
    ).toBeVisible();
    await expect(page.locator("#mt-course-card-course-manual")).toBeHidden();
  });

  test("CP10 — El filtro Manual muestra su programa", async ({ page }) => {
    await page.goto("/programas");
    const filtro = page.locator("#mt-filter-programs-manual");
    await filtro.click();
    await expect(page).toHaveURL(/filter=manual/);
    await expect(page.locator("#mt-course-card-course-manual")).toBeVisible();
    await expect(
      page.locator("#mt-course-card-course-automation"),
    ).toBeHidden();
  });

  test("CP11 — El enlace de horario de Automatización selecciona ese curso", async ({
    page,
  }) => {
    await page.goto("/programas");
    const horario = page.getByRole("link", { name: "HORARIO" }).nth(1);
    await horario.click();
    await expect(page).toHaveURL(/curso=course-automation/);
    await expect(
      page.locator("#mt-panel-schedule-course-automation"),
    ).toBeVisible();
  });

  test("CP12 — La pregunta frecuente despliega su respuesta", async ({
    page,
  }) => {
    await page.goto("/preguntas");
    const pregunta = page.getByRole("button", {
      name: "¿Necesito experiencia previa?",
    });
    await pregunta.click();
    await expect(pregunta).toHaveAttribute("aria-expanded", "true");
  });

  test("CP13 — La pestaña QA Automation cambia el programa del temario", async ({
    page,
  }) => {
    await page.goto("/temario");
    const pestaña = page.locator("#mt-tab-temario-automation");
    await pestaña.click();
    await expect(page).toHaveURL(/program=automation/);
    await expect(
      page.getByRole("heading", { name: /QA Automation/i }),
    ).toBeVisible();
  });

  test("CP14 — El botón del Mes 2 despliega sus clases", async ({ page }) => {
    await page.goto("/temario");
    const mesDos = page.locator("#mt-temario-module-1").getByRole("button");
    await mesDos.click();
    await expect(mesDos).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator("#mt-temario-class-1-0")).toBeVisible();
  });

  test("CP15 — El control de tema activa el tema claro", async ({ page }) => {
    await page.goto("/");
    const temaClaro = page.locator("#mt-theme-toggle");
    await temaClaro.click();
    await expect(page).toHaveURL(/theme=light/);
  });
});
