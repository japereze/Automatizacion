// Ejercicio 1: Mayor de edad con documento

let edad = 20;
let tieneCedula = true;

if (edad >= 18 && tieneCedula) {
    console.log("Puede ingresar.");
} else {
    console.log("No puede ingresar.");
}

// Ejercicio 2: Descuento en una tienda

let montoCompra = 6000;
let clienteVIP = false;

if (montoCompra > 5000 || clienteVIP) {
    console.log("Tienes descuento.");
} else {
    console.log("No tienes descuento.");
}

// Ejercicio 3: Acceso al sistema

let usuario = "admin";
let contraseña = "12345";

if (usuario === "admin" && contraseña === "12345") {
    console.log("Concedido.");
} else {
    console.log("Denegado.");
}

// Ejercicio 4: Aprobacion de un estudiante

let nota = 71;
let asistencia = 85;

if (nota >= 70 && asistencia >= 80) {
    console.log("Aprobo.");
} else {
    console.log("Reprobo.");
}

// Ejercicio 5: Acceso a un parque de diversiones

let estatura = 130;
let edad = 12;

if (estatura >= 120 && edad >= 10) {
    console.log("Puede subir.");
} else {
    console.log("No puede subir.");
}

// Ejercicio 6 Inicio de sesion bloqueado 

let cuentaBloqueada = false;
let contraseñaCorrecta = true;

if (!cuentaBloqueada && contraseñaCorrecta) {
    console.log("Puede entrar.");
} else {
    console.log("No puede entrar.");
}


// Ejercicio 7 Elegible para un prestamo

let salario = 35000;
let antiguedad = 3;

if (salario > 30000 && antiguedad >= 2) {
    console.log("Aplica para el prestamo.");
} else {
    console.log("No aplica para el prestamo.");
}


// Ejercicio 8 Promocion del cine

let edad = 20;
let estudiante = true;

if (edad < 12 || edad > 60 || estudiante) {
    console.log("Si tiene promocion.");
} else {
    console.log("No promocion.");
}

// Ejercicio 9 Validacion de contraseña

let contraseña = "MiPass clave2026";

if (contraseña.length >= 8 && contraseña !== "12345678") {
    console.log("Contraseña correcta.");
} else {
    console.log("Contraseña incorrecta.");
}

// Ejercicio 10 Acceso a un evento especial

let edad = 19;
let tieneInvitacion = true;
let pertenecePersonal = false;

if ((edad >= 18 && tieneInvitacion) || pertenecePersonal) {
    console.log("Puede entrar.");
} else {
    console.log("No puede entrar.");
}