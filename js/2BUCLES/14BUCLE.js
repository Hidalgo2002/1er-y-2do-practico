let cadena = prompt("Ingrese un texto:");

for (let i = 0; i < cadena.length; i++) {
    let caracter = cadena.charAt(i); //recupera el caracter i del string.
    if (i == cadena.length - 1) {
        document.write(caracter);
    } else {
        document.write(caracter + "-");
    }
}