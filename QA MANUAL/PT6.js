
//1: Crear arreglo de navegadores y agregar "Safari" con push().
let navegadores = ["chrome", "opera", "edge"];

// se add safari al arreglo
navegadores.push("safari");

// aqui se ejecuta el arreglo con un ciclo for
for (let i = 0; i < navegadores.length; i++) {
    console.log(navegadores[i]);
}

//2: Eliminar el último navegador usando pop().
let navegadores = ["chrome", "opera", "edge", "safari"];

// aqui se borra el ultimo navegador
navegadores.pop();

// aqui se muestra
for (let i = 0; i < navegadores.length; i++) {
    console.log(navegadores[i]);
}
