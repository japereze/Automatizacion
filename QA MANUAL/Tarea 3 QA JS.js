
//Crea un arreglo  en llamado frutas utilizando const con los siguientes valores Manzana, Pera, Uva, Mango

const frutas = ["Manzana", "Pera", "Uva", "Mango"];

console.log(frutas);


//Crea un arreglo en llamado numeros con los valores:

let numeros = [10, 20, 30, 40, 50];

console.log(numeros[0]); // Primero 
console.log(numeros[4]); // Ultimo 

// Crea un arreglo llamado colores. Agrega dos colores nuevos utilizando el método push().

const colores = ["Blanco", "Negro"];

colores.push("Rojo");
colores.push("Azul");

console.log(colores);

// Crea un arreglo en llamado paises. Elimina el último país utilizando pop()

let paises = ["Rep Dominicana", "Puerto Rico", "Cuba", "Haiti"];

paises.pop();

console.log(paises);

//Crea un arreglo en con cinco nombres de estudiantes. Utiliza un ciclo for para imprimir cada nombre en la consola.

let estudiantes = ["Jose", "Felix", "Manuel", "Carlos", "Katyris"];

for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
}


//Crea un objeto en llamado persona utilizando const con las siguientes propiedades: nombre, edad, ciudad. Imprime el objeto completo.

const persona = {
  nombre: "Jose Armando",
  edad: 30,
  ciudad: "DN"
};

console.log(persona);

//Utilizando el objeto anterior, imprime únicamente: nombre, ciudad.

const persona = {
  nombre: "Jose Armando",
  edad: 30,
  ciudad: "DN"
};

console.log(persona.nombre);
console.log(persona.ciudad);

//Crea un objeto en llamado auto con las propiedades marca, modelo, año. Modifica únicamente el valor de modelo Luego imprime el objeto:

let auto = {
  marca: "Mazda",
  modelo: "Demio",
  año: 2020
};

// Modificar el modelo
auto.modelo = "CX3";

// Imprimir el objeto
console.log(auto);

//Crea un objeto en llamado libro con las propiedades titulo, autor, paginas.Agrega una nueva propiedad llamada editorial.Imprime el objeto completo.

const libro = {
  titulo: "El Quijote de la Mancha",
  autor: "Miguel de Cervantes",
  paginas: 1000
};

// Agregar la propiedad editorial
libro.editorial = "Casa Cuesta";

// Imprimir el objeto completo
console.log(libro);

//Crea un objeto llamado estudiante con las propiedades nombre, edad, carrera, activo.

const estudiante = {
  nombre: "Jose Armando",
  edad: 30,
  carrera: "Quality Assurance",
  activo: true
};

console.log(estudiante);

