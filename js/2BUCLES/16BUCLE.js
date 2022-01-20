let frase = prompt("ingrese su frase");
frase=frase.reverse()
document.write(frase.reverse());
// INCOMPLETO

let frase = prompt("Ingrese un Texto");
let caracter, salida = "";

for (let j = 0; j < frase.length; j++) {
    caracter = frase.charAt(j); //recupera el caracter de la posicion j del string.
    salida = caracter + salida;
}
document.write(salida);