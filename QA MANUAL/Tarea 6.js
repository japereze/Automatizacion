
//Ejercicio 1. Ejecutar casos de prueba (for)
for (let i = 1; i <= 10; i++) {
    console.log("ejecutando caso de prueba #" + i);
}

//Ejercicio 2. Contar pruebas aprobadas (for)
let totalpruebas = 15;

for (let i = 1; i <= totalpruebas; i++) {
    console.log("prueba " + i + ": paso");
}

console.log("total de pruebas aprobadas: " + totalpruebas);


//Ejercicio 3. Mostrar IDs de Bugs (for)
for (let i = 101; i <= 110; i++) {
    console.log("bug-" + i);
}

//Ejercicio 4. Función sin parámetros
function mostrarbienvenida() {
    console.log("bienvenido al sistema de automatizacion QA");
}
mostrarBienvenida();

// Ejercicio 5. Función con parámetros
function mostrarcaso(nombrecaso) {
    console.log("caso de prueba: " + nombrecaso);
}

mostrarCaso("login");
mostrarCaso("registro");
mostrarCaso("recuperar contraseña");
mostrarCaso("cerrar sesion");

//Ejercicio 6. Función para validar resultado
function validarResultado(resultado) {
    if (resultado === "pass") {
        console.log("la prueba fue un exito.");
    } else if (resultado === "fail") {
        console.log("la prueba fallo.");
    }
}

validarResultado("pass");
validarResultado("fail");


//Ejercicio 7. Ejecutar varios módulos (for + función)
function probarmodulo(nombre) {
    console.log("probando " + nombre);
}

for (let i = 1; i <= 5; i++) {
    probarmodulo("modulo " + i);
}

//Ejercicio 8. Mostrar usuarios QA
let testers = [
    "Juan",
    "Ana",
    "Pedro",
    "Luis",
    "María"
];

for (let i = 0; i < 2; i++) {
    console.log("tester: " + testers[i]);
}

//Ejercicio 9. Función para calcular porcentaje
function calcularporcentaje(total, exitosas) {
    let porcentaje = (exitosas / total) * 100;
    console.log("porcentaje de exito: " + porcentaje + "%");
}

calcularporcentaje(100, 95);

//Ejercicio 10. Mini Simulación QA (for + función)
function ejecutarprueba(numero) {
    console.log("Ejecutando prueba #" + numero);
    console.log("Resultado: PASS");
    console.log(""); // Línea en blanco para separar las pruebas
}

for (let i = 1; i <= 10; i++) {
    ejecutarPrueba(i);
}
