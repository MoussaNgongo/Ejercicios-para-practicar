let suma=0;
let introducido = prompt("Dime num", "");
let numeroNumeros=0;


while (introducido>=0) {
    suma+=Number(introducido);
    numeroNumeros+=1;
    introducido = prompt("Dime num", "");

}

document.getElementById("suma").innerText += " " + suma.toString();
document.getElementById("media").innerText += " " + (suma/numeroNumeros).toString();