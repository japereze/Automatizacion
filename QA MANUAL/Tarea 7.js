// 1. Agregar casos de prueba (`push`
let casosPrueba = ["Login", "Registro"];

casosPrueba.push("pago");
casosPrueba.push("perfil");
casosPrueba.push("recuperar contraseña");

console.log(casosPrueba);


// 2. Eliminar el último navegador (`pop`)
let navegadores = ["Chrome", "Firefox", "Edge", "Safari"];

navegadores.pop();

console.log(navegadores);


// 3. Eliminar el primer ambiente (`shift`)
let ambientes = ["DEV", "QA", "UAT", "PROD"];

let ambienteEliminado = ambientes.shift();

console.log("ambiente eliminado:", ambienteEliminado);

console.log("ambientes restantes:", ambientes);


// 4. Agregar un ambiente al inicio (`unshift`)
let ambientes = ["QA", "UAT", "PROD"];

ambientes.unshift("LOCAL");

console.log(ambientes);


// *5. Verificar un navegador (`includes`)
let navegadores = ["Firefox", "Edge", "Chrome", "Safari"];

// Verificar si "Chrome" existe en el array
if (navegadores.includes("Chrome")) {
    console.log("Chrome disponible");
} else {
    console.log("Chrome no disponible");
}

//**6. Filtrar usuarios activos (`filter`)

let usuarios = [
  { nombre: "Juan", activo: true },
  { nombre: "Ana", activo: false },
  { nombre: "Pedro", activo: true },
  { nombre: "María", activo: false }
];

let usuariosActivos = usuarios.filter(usuario => usuario.activo);

console.log(usuariosActivos);

//7. Convertir nombres a mayúsculas (`map`)

let nombres = ["juan", "ana", "pedro", "sofia"];

let mayusculas = nombres.map(nombre => nombre.toUpperCase());

console.log(mayusculas);


//8. Buscar un caso de prueba (`includes`)

let casosPrueba = [
  "Login Correcto",
  "Registro",
  "Pago",
  "Perfil",
  "Recuperar pass"
];

// Verificar si existe "Login Exitoso"
if (casosPrueba.includes("Login Correcto")) {
  console.log("Login Correcto");
} else {
  console.log("No hay ningun caso de prueba");
}

//9. Filtrar números mayores que 50 (`filter`)

let numeros = [12, 45, 60, 80, 25, 100, 35];

let mayores = numeros.filter(function(numero) {
  return numero > 50;
});
console.log(mayores);

//10. Crear un listado de navegadores (`map`)

let navegadores = ["Chrome", "Firefox", "Edge"];

let listado = navegadores.map(function(navegador) {
  return { navegador: navegador };
});

console.log(listado);

//11. Administrar una lista de errores

let errores = [];

errores.push("Error de Login");
errores.push("Error de Registro");
errores.push("Error de Pago");
errores.push("Error de Perfil");
errores.push("Error de DB");

errores.pop();
errores.unshift("Error de autenticacion");
errores.shift();
console.log(errores);


//12. Filtrar casos de prueba prioritarios
let casos = [
  { caso: "Login", prioridad: "Alta" },
  { caso: "Pago", prioridad: "Media" },
  { caso: "Registro", prioridad: "Alta" },
  { caso: "Perfil", prioridad: "Baja" }
];
let casosAlta = casos.filter(caso => caso.prioridad === "Alta");

console.log(casosAlta);

//13. Transformar nombres de casos (`map`)

let casos = ["Login", "Pago", "Registro", "Perfil"];

let casosTransformados = casos.map(caso => `Caso de prueba: ${caso}`);

console.log(casosTransformados);

//14. Gestión de ambientes

let ambientes = ["QA", "UAT", "PROD"];

ambientes.unshift("DEV");

ambientes.push("LOCAL");

let existeProd = ambientes.includes("PROD");

console.log("¿Existe PROD?", existeProd);
ambientes.pop();
console.log(ambientes);

//15. Reto Final (Utilizando todos los métodos)

