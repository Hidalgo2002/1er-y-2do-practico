// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let resultado = ""

do{
    let numero = prompt("ingrese su numero")
if(resultado==""){
resultado=resultado+numero
}else{
    resultado=resultado+"-"+(numero)
}}while (confirm("¿desea seguir?"))
    document.write(resultado)