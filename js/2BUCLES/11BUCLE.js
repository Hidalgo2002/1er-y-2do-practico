let primerEdad = prompt("ingrese su 1er Edad");
let primerApellido=prompt("ingrese su 1er apellido");

let segundoEdad=prompt("ingrese su 2do Edad");
let segundoApellido=prompt("ingrese su 2do apellido");

let tercerEdad=prompt("ingrese su 3er Edad");
let tercerApellido=prompt("ingrese su 3er apellido");

let resultado = Math.max(primerEdad,segundoEdad,tercerEdad)

if(primerEdad>segundoEdad&& primerEdad>tercerEdad){
    document.write(primerApellido+"es el mayor")
};
if(segundoEdad>primerEdad&& segundoEdad>tercerEdad){
    document.write(segundoApellido+"es el mayor")
};
if(tercerEdad>primerEdad&& tercerEdad>segundoEdad){
    document.write(tercerApellido+"es el mayor")
};
