//Obtener el numero del usurio
const num = prompt("Ingresa un numero");
let resultado = 1;

for (var i = 1; i <= num; i++) {
    resultado *= i;
}

console.log(`El factorial de ${num} es: ${resultado}`);

const resultadoFac = document.getElementById("resultado");

resultadoFac.innerHTML = "<p>El factorial de " + num + " es: " + resultado + "</p>";