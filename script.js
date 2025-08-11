// Obtener entrada del usuario
let num = prompt("Ingresa un número");

// Convertir a número
num = Number(num);

// Verificar si es un número entero válido
if (!Number.isInteger(num) || num < 0) {
    alert("Por favor ingresa un número entero positivo.");
} else {
    let resultado = 1;
    for (let i = 1; i <= num; i++) {
        resultado *= i;
    }
    console.log(`El factorial de ${num} es: ${resultado}`);
    document.getElementById("resultado").innerHTML = `<p>El factorial de ${num} es: ${resultado}</p>`;
}
