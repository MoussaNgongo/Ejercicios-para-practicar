let valor1= prompt("Dime la contraseña", "");
let valor2= prompt("Dime la contraseña", "");
let valor3="";

if(isNaN(valor1*valor2)){
    valor3="No has metido un numero";
}
else{
    
    if(Number(valor1)>Number(valor2)){
        valor3="Valor 1 mayor";
    }
    else if(Number(valor1)<Number(valor2)){
        valor3="Valor 2 mayor";

    }
    else{
        valor3="Valores iguales";
    }
}


document.getElementById("marico").innerText=valor3;
console.log(valor1*valor2);