
let valor3 = "No has metido un numero";


while (valor3 == "No has metido un numero") {
    let valor1 = prompt("Dime num1", "");
    let valor2 = prompt("Dime num2", "");
    if (isNaN(valor1 * valor2) || valor1 <= 0 || valor2 <= 0) {
        valor3 = "No has metido un numero";
    } else {

        if (valor1 > valor2) {
            valor3 = "Valor 1 mayor";
        } else if (valor1 < valor2) {
            valor3 = "Valor 2 mayor";

        } else {
            valor3 = "Valores iguales";
        }
    }

}




document.getElementById("marico").innerText = valor3;
console.log(valor1 * valor2);