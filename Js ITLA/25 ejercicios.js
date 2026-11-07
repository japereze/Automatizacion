//Ejercicio 1
let nombre = " Ana ";
let apellido = " Pérez ";
let nombreCompleto;

function generarNombreCompleto(nombre, apellido) {
  nombre = nombre.trim();
  apellido = apellido.trim();

  nombreCompleto = nombre + " " + apellido;

  return nombreCompleto.toUpperCase();
}

console.log(generarNombreCompleto(nombre, apellido));

//Ejecrcicio 4
let minutosTotales = 135;
let horas = Math.floor(minutosTotales / 60);
let minutosRestantes = minutosTotales % 60;

console.log(
  `${minutosTotales} minutos → ${horas} horas y ${minutosRestantes} minutos.`,
);

//Ejercicio 5
let palabra = "Programacion";
let cantidadCaracteres = palabra.length;
let palabraMayusculas = palabra.toUpperCase();
let palabraMinusculas = palabra.toLowerCase();

console.log(
  `${palabra} → ${cantidadCaracteres} caracteres, ${palabraMayusculas}, ${palabraMinusculas}.`,
);

//Ejercicio 7
let edad = 10;
let cantidad = 3;
let precioEntrada;
let total;

if (edad < 12) {
  precioEntrada = 200; // Menores de 12 años
} else {
  precioEntrada = 350; // 12 años o más
}

total = precioEntrada * cantidad;

console.log(
  `Edad ${edad}, ${cantidad} entradas → ${cantidad} x ${precioEntrada} = RD$${total}.`,
);

//Ejercicio 8
let temperatura = 32;
let mensaje = "";

if (temperatura < 20) {
  mensaje = "Temperatura fría.";
} else if (temperatura >= 20 && temperatura <= 29) {
  mensaje = "Temperatura agradable.";
} else {
  mensaje = "Temperatura calurosa.";
}

console.log(`${temperatura} °C → ${mensaje}`);

//Ejercicio 10
let contrasena = "  abc12345  ";
let contrasenaLimpia = contrasena.trim();

if (contrasenaLimpia.length > 0 && contrasenaLimpia.length >= 8) {
  console.log("Contraseña válida");
} else {
  console.log("Contraseña no válida");
}

//Ejercicio 11
let a = 5;
let b = 12;
let c = 8;
let mayor;

if (a >= b && a >= c) {
  mayor = a;
} else if (b >= a && b >= c) {
  mayor = b;
} else {
  mayor = c;
}

console.log(`${a}, ${b}, ${c} → El mayor es ${mayor}.`);

//Ejercicio 13
function mostrarTransporte() {
  // 1. Leer el value del select
  let select = document.getElementById("transporte");
  let opcionSeleccionada = select.value;
  let mensaje = "";

  switch (opcionSeleccionada) {
    case "Carro":
      mensaje = "Seleccionaste transporte privado.";
      break;
    case "Motor":
      mensaje = "Seleccionaste un vehículo de dos ruedas.";
      break;
    case "Autobús":
      mensaje = "Seleccionaste transporte público.";
      break;
    case "A pie":
      mensaje = "Seleccionaste caminar para llegar a tu destino.";
      break;
    default:
      mensaje = "";
  }

  if (opcionSeleccionada !== "") {
    document.getElementById("resultado").innerText =
      `${opcionSeleccionada} → ${mensaje}`;
    console.log(`${opcionSeleccionada} → ${mensaje}`);
  } else {
    document.getElementById("resultado").innerText = "";
  }
}

//Ejercicio 14

function calcularPedido() {
  let selectProducto = document.getElementById("producto");
  let precio = Number(selectProducto.value);

  let indiceSeleccionado = selectProducto.selectedIndex;
  let nombreProducto =
    selectProducto.options[indiceSeleccionado].text.split(" ")[0];
  let cantidad = Number(document.getElementById("cantidad").value);

  if (precio === 0) {
    document.getElementById("resultado").innerText =
      "Por favor, selecciona un producto válido.";
    return;
  }

  let total = precio * cantidad;

  let mensajeResultado = `${nombreProducto} × ${cantidad} → Total RD$${total}.`;

  document.getElementById("resultado").innerText = mensajeResultado;
  console.log(mensajeResultado);
}

//Ejercicio 15

function procesarEncuesta() {
  let checkboxes = document.querySelectorAll(".lenguaje");

  let seleccionados = [];
  let acumulacionTexto = "";

  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      seleccionados.push(checkbox.value);
    }
  });

  if (seleccionados.length === 0) {
    acumulacionTexto = "No se seleccionó ningún lenguaje.";
  } else {
    let combinacion = seleccionados.join(" + ");
    let listaFinal = seleccionados.join(", ");
    acumulacionTexto = `${combinacion} → Lenguajes seleccionados: ${listaFinal}.`;
  }

  document.getElementById("resultado").innerText = acumulacionTexto;
  console.log(acumulacionTexto);
}

//Ejercicio 16

function confirmarPago() {
  let radios = document.getElementsByName("metodoPago");
  let valorSeleccionado = "";

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      valorSeleccionado = radios[i].value;
      break;
    }
  }

  if (valorSeleccionado === "") {
    document.getElementById("resultado").innerText =
      "Por favor, seleccione un método de pago.";
  } else {
    let mensaje = `${valorSeleccionado} → Método de pago seleccionado: ${valorSeleccionado}.`;
    document.getElementById("resultado").innerText = mensaje;
    console.log(mensaje);
  }
}

//Ejercicio 17

function calcularEnvio() {
  let compra = Number(document.getElementById("compra").value);
  let esExpress = document.getElementById("express").checked;

  let tipoEnvio = esExpress ? "con express" : "sin express";
  let costoEnvio = 0;
  let total = 0;

  if (esExpress) {
    costoEnvio = 300; // El envío express siempre cuesta RD$300
  } else {
    if (compra > 3000) {
      costoEnvio = 0;
    } else {
      costoEnvio = 150;
    }
  }

  total = compra + costoEnvio;

  let mensaje = `Compra RD$${compra.toLocaleString()} ${tipoEnvio} → Envío RD$${costoEnvio}. (Total: RD$${total.toLocaleString()})`;

  document.getElementById("resultado").innerText = mensaje;
  console.log(mensaje);
}

//Ejercicio 18
function actualizarNombre() {
  let inputNombre = document.getElementById("cajaNombre");
  let nombre = inputNombre.value;

  let contenedorResultado = document.getElementById("vistaPrevia");
  contenedorResultado.innerHTML = `Vista previa: ${nombre}.`;

  console.log(`Vista previa: ${nombre}`);
}

//Ejercicio 19
function convertirMayusculas() {
  let textoOriginal = document.getElementById("ciudad").value;

  let textoMayusculas = textoOriginal.toUpperCase();

  let contenedor = document.getElementById("resultado");
  contenedor.innerText = `Resultado en mayúsculas: ${textoMayusculas}`;

  console.log(`${textoOriginal} → ${textoMayusculas}`);
}

//Ejercicio 20
function mostrarAyuda(textoMensaje) {
  let elementoAyuda = document.getElementById("bloqueAyuda");
  elementoAyuda.innerText = textoMensaje;
  console.log(`En enfoque → ${textoMensaje}`);
}

function limpiarAyuda() {
  let elementoAyuda = document.getElementById("bloqueAyuda");
  elementoAyuda.innerText = "";
  console.log("Fuera de enfoque → Ayuda limpia.");
}

//Ejercicio 21
let tarjeta = document.getElementById("tarjeta");
let texto = document.getElementById("texto");

function entrarRaton() {
  tarjeta.style.backgroundColor = "lightyellow";

  texto.textContent = "¡Tarjeta resaltada y mensaje cambiado!";

  console.log("Ratón adentro → Estado resaltado.");
}

function salirRaton() {
  tarjeta.style.backgroundColor = "lightgray";

  texto.textContent = "Pasa el ratón por encima para ver el efecto.";

  console.log("Ratón afuera → Estado restaurado.");
}

//Ejercicio 22
let contador = 0;

function contarClic() {
  contador = contador + 1;

  actualizarPantalla();
}

function reiniciarContador() {
  contador = 0;
  actualizarPantalla();
}

function actualizarPantalla() {
  let mensaje = `Has hecho clic ${contador} veces.`;
  document.getElementById("pantallaContador").innerText = mensaje;
  console.log(`Estado actual → ${mensaje}`);
}

//Ejercicio 23
function detectarEnter(event) {
  if (event.key === "Enter") {
    let inputElemento = document.getElementById("cajaTexto");
    let texto = inputElemento.value;
    let contenedorResultado = document.getElementById("resultado");
    contenedorResultado.innerText = `Mensaje enviado: ${texto}.`;

    console.log(`Mensaje enviado: ${texto}`);
    inputElemento.value = "";
  }
}

//Ejercicio 24
function mostrarTamano() {
  let ancho = window.innerWidth;
  let alto = window.innerHeight;
  let mensaje = `Ancho: ${ancho} px | Alto: ${alto} px, actualizándose al cambiar tamaño.`;

  document.getElementById("panelInfo").innerText = mensaje;

  console.log(`Dimensión actual → ${ancho}x${alto}`);
}

//Ejercicio 25

let datosInscripcion = {};

function validarFormulario() {
  let contenedorError = document.getElementById("mensajeError");
  let contenedorFicha = document.getElementById("zonaFicha");

  contenedorError.innerText = "";
  contenedorFicha.innerHTML = "";

  let nombreVal = document.getElementById("nombre").value.trim();
  let edadVal = Number(document.getElementById("edad").value);
  let carreraVal = document.getElementById("carrera").value;
  let turnoVal = document.getElementById("turno").value;

  let radiosModalidad = document.getElementsByName("modalidad");
  let modalidadVal = "";
  for (let i = 0; i < radiosModalidad.length; i++) {
    if (radiosModalidad[i].checked) {
      modalidadVal = radiosModalidad[i].value;
      break;
    }
  }

  let aceptaReglamento = document.getElementById("reglamento").checked;

  if (nombreVal === "") {
    contenedorError.innerText = "Por favor, introduce tu nombre.";
    return;
  }
  if (!edadVal || edadVal <= 0) {
    contenedorError.innerText = "Por favor, introduce una edad válida.";
    return;
  }
  if (carreraVal === "") {
    contenedorError.innerText = "Por favor, selecciona una carrera.";
    return;
  }
  if (turnoVal === "") {
    contenedorError.innerText = "Por favor, selecciona un turno.";
    return;
  }
  if (modalidadVal === "") {
    contenedorError.innerText = "Por favor, selecciona una modalidad.";
    return;
  }
  if (!aceptaReglamento) {
    contenedorError.innerText = "Debe aceptar el reglamento para inscribirse.";
    return;
  }

  datosInscripcion = {
    nombre: nombreVal,
    edad: edadVal,
    carrera: carreraVal,
    turno: turnoVal,
    modalidad: modalidadVal,
  };

  mostrarResumen();
}

function mostrarResumen() {
  let contenedorFicha = document.getElementById("zonaFicha");

  let htmlFicha = `
        <div class="ficha">
            <h3>📝 Ficha de Inscripción Completa</h3>
            <p><strong>Nombre:</strong> ${datosInscripcion.nombre}</p>
            <p><strong>Edad:</strong> ${datosInscripcion.edad} años</p>
            <p><strong>Carrera:</strong> ${datosInscripcion.carrera}</p>
            <p><strong>Turno:</strong> ${datosInscripcion.turno}</p>
            <p><strong>Modalidad:</strong> ${datosInscripcion.modalidad}</p>
            <p style="color: green; font-weight: bold;">✓ Estado: Inscrito Correctamente</p>
        </div>
    `;

  contenedorFicha.innerHTML = htmlFicha;
  console.log("Ficha generada exitosamente:", datosInscripcion);
}
