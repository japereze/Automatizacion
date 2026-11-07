//02 Mayor de edad
function verificarEdad() {
  let edad = parseInt(document.getElementById("edadInput").value);

  if (edad >= 18) {
    console.log("Mayor de edad");
  } else {
    console.log("Menor de edad");
  }
}

document
  .getElementById("botonVerificar")
  .addEventListener("click", verificarEdad);

//03 Mayor de edad
function mostrarDia() {
  let numeroDia = parseInt(document.getElementById("diaSelect").value);
  let diaSemana = "";

  switch (numeroDia) {
    case 1:
      diaSemana = "Lunes";
      break;
    case 2:
      diaSemana = "Martes";
      break;
    case 3:
      diaSemana = "Miércoles";
      break;
    case 4:
      diaSemana = "Jueves";
      break;
    case 5:
      diaSemana = "Viernes";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
    case 7:
      diaSemana = "Domingo";
      break;
    default:
      diaSemana = "Número no válido";
  }

  console.log(diaSemana);

  document.getElementById("diaSelect").addEventListener("change", mostrarDia);
}

//04 Sumadora sencilla
function sumarValores(valor1, valor2) {
  let numero1 = parseFloat(valor1);
  let numero2 = parseFloat(valor2);
  let resultado = numero1 + numero2;

  console.log(`El resultado de la suma es: ${resultado}`);
}

function manejarClick() {
  let input1 = document.getElementById("numero1Input").value;
  let input2 = document.getElementById("numero2Input").value;

  sumarValores(input1, input2);
}

document.getElementById("botonSumar").addEventListener("click", manejarClick);

//05 Tabla de multiplicar

const generarTabla = (n) => {
  let r = `--- Tabla del ${n} ---\n`;
  for (let i = 1; i <= 12; i++) r += `${n} x ${i} = ${n * i}\n`;
  console.log(r); // O document.body.innerText = r;
};

btn.onclick = () => generarTabla(+num.value);

//06 Contador con while
btn.onclick = () => {
  let i = 1,
    r = "";
  while (i <= +num.value) r += i++ + " ";
  console.log(r); // O el elemento donde desees mostrarlo
};

//07 Calculadora de promedio
const promedio = (n1, n2, n3) => {
  const p = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) / 3;
  return `Promedio: ${p.toFixed(1)} - ${p >= 70 ? "Aprobó" : "Reprobó"}`;
};

btn.onclick = () =>
  console.log(promedio(nota1.value, nota2.value, nota3.value));

//08 Conversor de temperatura
const convertir = (c) => (c * 9) / 5 + 32;

// Evento input en una sola línea (asumiendo input id="celsius" y contenedor id="resultado")
celsius.oninput = () =>
  (resultado.textContent = `${convertir(+celsius.value)} °F`);

//09 Número par o impar
btn.onclick = () => {
  if (+num.value % 2 === 0) console.log("Par");
  else console.log("Impar");
};

//10 Hipotenusa
btn.onclick = () => console.log(Math.sqrt(c1.value ** 2 + c2.value ** 2));

//11 Generador de número aleatorio
btn.onclick = () => console.log(Math.floor(Math.random() * 100) + 1);

//12 Adivina el número
const secreto = Math.floor(Math.random() * 20) + 1;

btn.onclick = () => {
  const u = +num.value;
  if (u === secreto) console.log("¡Acertaste!");
  else console.log(u > secreto ? "Muy alto" : "Muy bajo");
};

//15 Formulario de registro
form.onsubmit = (e) => {
  e.preventDefault();
  if (!nom.value || !cor.value || +edad.value < 15)
    return console.log("Datos inválidos");
  console.log("Formulario válido");
};
