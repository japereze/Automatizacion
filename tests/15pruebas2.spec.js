import { test } from "@playwright/test";

//TC 1

test("Validar login con credenciales correctas", async ({ page }) => {
  // Abrir pagina de Login
  await page.goto("https://www.saucedemo.com/");

  // Digitar el campo Username
  await page.getByPlaceholder("Username").fill("standard_user");

  // Digitar el campo Password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // Click en el botón de Login
  await page.locator('[data-test="login-button"]').click();
});

//TC 2

test("Validar login y agregar producto al carrito", async ({ page }) => {
  // Abrir pagina de Login
  await page.goto("https://saucedemo.com");

  // Digitar el campo Username
  await page.getByPlaceholder("Username").fill("standard_user");

  // Digitar el campo Password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // Click en el botón de Login
  await page.getByRole("button", { name: "Login" }).click();

  // Click en el boton Add to cart
  await page.getByRole("button", { name: "Add to cart" }).first().click();
});

//TC 3

test("Validar login, agregar y remover producto de la mochila", async ({
  page,
}) => {
  // Abrir pagina de Login
  await page.goto("https://saucedemo.com");

  // Digitar el campo Username
  await page.getByPlaceholder("Username").fill("standard_user");

  // Digitar el campo Password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // Click en el botón de Login
  await page.getByRole("button", { name: "Login" }).click();

  // Click en el botón Add to cart
  await page.getByRole("button", { name: "Add to cart" }).first().click();

  // Click en el botón Remove para quitarla del carrito
  await page.getByRole("button", { name: "Remove" }).first().click();
});

//TC 4

test("Validar la existencia de cualquier producto en el carrito", async ({
  page,
}) => {
  // 1. Iniciar sesión y entrar a la tienda
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 2. Agregar el primer producto disponible (cualquiera que sea)
  const primerProducto = page.locator(".inventory_item").first();
  await primerProducto.getByRole("button", { name: "Add to cart" }).click();

  // 3. Ir a la página del carrito de compras
  await page.locator(".shopping_cart_link").click();
});

//TC 5

test("Remover producto del carrito y validar que quede vacío", async ({
  page,
}) => {
  // 1. Iniciar sesión e ir al carrito (Asumiendo que ya hay un producto adentro)
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Agregamos un producto rápido para asegurar el escenario de prueba
  await page
    .locator(".inventory_item")
    .first()
    .getByRole("button", { name: "Add to cart" })
    .click();

  // Ir al carrito
  await page.locator(".shopping_cart_link").click();

  // 2. Localizar el contenedor del producto que está en el carrito
  const itemEnCarrito = page.locator(".cart_item").first();

  // 3. Hacer clic en el botón "Remove" usando su rol accesible
  // Esto funciona para cualquier producto porque todos tienen un botón con el mismo texto
  await itemEnCarrito.getByRole("button", { name: "Remove" }).click();
});

//TC 6

test("Agregar 5 productos específicos al carrito", async ({ page }) => {
  // 1. Iniciar sesión y entrar a la tienda
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 2. Definir la lista de los 5 productos que queremos de la imagen
  const productosASeleccionar = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
  ];

  // 3. Recorrer la lista y hacer clic en el botón de cada uno
  for (const nombreProducto of productosASeleccionar) {
    // Localizamos el contenedor de la tarjeta del producto específico
    const productoCard = page
      .locator(".inventory_item")
      .filter({ hasText: nombreProducto });

    // Hacemos clic en el botón "Add to cart" de ese contenedor
    await productoCard.getByRole("button", { name: "Add to cart" }).click();
  }
});

//TC 7

test("Eliminar los 5 productos específicos desde la tienda", async ({
  page,
}) => {
  // [... Pasos previos de Login y Agregar los 5 productos ...]

  const productosAEliminar = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
  ];

  // Recorrer la lista y hacer clic en el botón "Remove" de cada uno
  for (const nombreProducto of productosAEliminar) {
    const productoCard = page
      .locator(".inventory_item")
      .filter({ hasText: nombreProducto });
    await productoCard.getByRole("button", { name: "Remove" }).click();
  }

  // VALIDACIÓN: El contador del carrito debe desaparecer
  await expect(page.locator(".shopping_cart_badge")).not.toBeVisible();
});

//TC 8

test("Flujo completo de Login y Logout exitoso", async ({ page }) => {
  // 1. Ir a la página de inicio
  await page.goto("https://saucedemo.com");

  // 2. Realizar el Login usando los campos visibles en la primera imagen
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 3. Abrir el menú lateral izquierdo (Botón Hamburguesa)
  // Usamos getByRole('button') ya que estructuralmente es un botón interactivo
  await page.getByRole("button", { name: "Open Menu" }).click();

  // 4. Hacer clic en la opción "Logout" visible en la segunda imagen
  // Al ser un enlace de navegación en HTML, lo ideal es usar el rol "link"
  const opcionLogout = page.getByRole("link", { name: "Logout" });
  await opcionLogout.click();
});

//TC 9

test("Agregar 5 productos e specíficos al carrito", async ({ page }) => {
  // 1. Iniciar sesión y entrar a la tienda
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 2. Definir la lista de los 5 productos que queremos de la imagen
  const productosASeleccionar = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
  ];

  // 3. Recorrer la lista y hacer clic en el botón de cada uno
  for (const nombreProducto of productosASeleccionar) {
    // Localizamos el contenedor de la tarjeta del producto específico
    const productoCard = page
      .locator(".inventory_item")
      .filter({ hasText: nombreProducto });

    // Hacemos clic en el botón "Add to cart" de ese contenedor
    await productoCard.getByRole("button", { name: "Add to cart" }).click();
  }
});

//TC 10

test("Remover producto del carrito y validar que quede vacío", async ({
  page,
}) => {
  // 1. Iniciar sesión e ir al carrito (Asumiendo que ya hay un producto adentro)
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // Agregamos un producto rápido para asegurar el escenario de prueba
  await page
    .locator(".inventory_item")
    .first()
    .getByRole("button", { name: "Add to cart" })
    .click();

  // Ir al carrito
  await page.locator(".shopping_cart_link").click();

  // 2. Localizar el contenedor del producto que está en el carrito
  const itemEnCarrito = page.locator(".cart_item").first();

  // 3. Hacer clic en el botón "Remove" usando su rol accesible
  // Esto funciona para cualquier producto porque todos tienen un botón con el mismo texto
  await itemEnCarrito.getByRole("button", { name: "Remove" }).click();
});

//TC 11

test("Validar la existencia de cualquier producto en el carrito", async ({
  page,
}) => {
  // 1. Iniciar sesión y entrar a la tienda
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 2. Agregar el primer producto disponible (cualquiera que sea)
  const primerProducto = page.locator(".inventory_item").first();
  await primerProducto.getByRole("button", { name: "Add to cart" }).click();

  // 3. Ir a la página del carrito de compras
  await page.locator(".shopping_cart_link").click();
});

//TC 12

 // 1. Iniciar sesión y entrar a la tienda
 await page.goto("https://saucedemo.com");
 await page.getByPlaceholder("Username").fill("standard_user");
 await page.getByPlaceholder("Password").fill("secret_sauce");
 await page.getByRole("button", { name: "Login" }).click();

  // [... Tu código anterior de la imagen donde haces Login y agregas el producto ...]
  await page.getByRole("button", { name: "Add to cart" }).first().click();

  // 2. Entrar al carrito haciendo clic en el ícono de la esquina superior derecha (Rol 'link')
  await page.getByRole("link", { name: "1" }).click();

  // 3. Hacer clic en el botón "Continue Shopping" usando su rol accesible
  await page.getByRole("button", { name: "Continue Shopping" }).click();

  // 4. Validación: Confirmar que estás de vuelta en la pantalla del catálogo de productos
  await expect(page).toHaveURL("https://saucedemo.com");
});


//TC 13

test("Validar la existencia de cualquier producto en el carrito", async ({
  page,
}) => {
  // 1. Iniciar sesión y entrar a la tienda
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 2. Agregar el primer producto disponible (cualquiera que sea)
  const primerProducto = page.locator(".inventory_item").first();
  await primerProducto.getByRole("button", { name: "Add to cart" }).click();

  // 3. Ir a la página del carrito de compras
  await page.locator(".shopping_cart_link").click();
});

//TC 14
test("Agregar 5 productos específicos al carrito", async ({ page }) => {
  // 1. Iniciar sesión y entrar a la tienda
  await page.goto("https://saucedemo.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  // 2. Definir la lista de los 5 productos que queremos de la imagen
  const productosASeleccionar = [
    "Sauce Labs Backpack",
    "Sauce Labs Bike Light",
    "Sauce Labs Bolt T-Shirt",
    "Sauce Labs Fleece Jacket",
    "Sauce Labs Onesie",
  ];

  // 3. Recorrer la lista y hacer clic en el botón de cada uno
  for (const nombreProducto of productosASeleccionar) {
    // Localizamos el contenedor de la tarjeta del producto específico
    const productoCard = page
      .locator(".inventory_item")
      .filter({ hasText: nombreProducto });

    // Hacemos clic en el botón "Add to cart" de ese contenedor
    await productoCard.getByRole("button", { name: "Add to cart" }).click();
  }
});

//TC 15

test("Validar login y agregar producto al carrito", async ({ page }) => {
  // Abrir pagina de Login
  await page.goto("https://saucedemo.com");

  // Digitar el campo Username
  await page.getByPlaceholder("Username").fill("standard_user");

  // Digitar el campo Password
  await page.getByPlaceholder("Password").fill("secret_sauce");

  // Click en el botón de Login
  await page.getByRole("button", { name: "Login" }).click();

  // Click en el boton Add to cart
  await page.getByRole("button", { name: "Add to cart" }).first().click();
});
