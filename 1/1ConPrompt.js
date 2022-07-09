//Programa que pide 2 números y que nos dice cual es el mayor, el menor y si son iguales

//Esta hecho con prompt





let valor1 = prompt("Dime el num1", "");
let valor2 = prompt("Dime el num2", "");
let valor3 = "";

if (isNaN(valor1 * valor2)) {
    valor3 = "No has metido un numero";
} else {

    if (Number(valor1) > Number(valor2)) {
        valor3 = "Valor 1 mayor";
    } else if (Number(valor1) < Number(valor2)) {
        valor3 = "Valor 2 mayor";

    } else {
        valor3 = "Valores iguales";
    }
}


document.getElementById("p1").innerText = valor3;