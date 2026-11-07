
// 1 Declarar tres numeros
let num1 = 10;
let num2 = 5;
let num3 = 100;

if (num1 >= num2 && num1 >= num3) {
    console.log("numero mayor es: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("numero mayor es: " + num2);
} else {
    console.log("numero mayor es: " + num3);
}

// 2 Numero par o impar
let numero = 10;

if (numero % 2 === 0) {
    console.log(numero + " numero par.");
} else {
    console.log(numero + " numero impar.");
}

// 3 Contador descendente
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// 4 Suma acumulada de 1 al 15 
let suma = 0;

for (let i = 1; i <= 5; i++) {
    suma += i;
}
console.log("la suma es: " + suma);


//5 Conversion de temperatura
let celsius = 25;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log(celsius + "c equivalen a " + fahrenheit + "f");


//6 Validacion de acceso
let usuario = "admin";
let password = "1234";

if (usuario === "admin" && password === "1234") {
    console.log("permitido");
} else {
    console.log("denegado");
}

//7 Tabla de multiplicar dinamica 
let numero = 1;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

//8 Promedio de lista
let numeros = [10, 20, 30, 40, 50];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

let promedio = suma / numeros.length;

console.log("promedio es: " + promedio);


//9 Contar positivos y negativos
let valores = [3, -4, 9, -2, 0, 1];

let positivo = 0;
let negativo = 0;

for (let i = 0; i < valores.length; i++) {
    if (valores[i] > 0) {
        positivo++;
    } else if (valores[i] < 0) {
        negativo++;
    }
}
console.log("positivo: " + positivo);
console.log("negativo: " + negativo);


//10 Simulacion de compra
let cantidadproductos = 6;
let preciounitario = 600;

let total = cantidadproductos * preciounitario;

if (total > 2000) {
    total = total - (total * 0.10);
}

console.log("total: RD$" + total);

