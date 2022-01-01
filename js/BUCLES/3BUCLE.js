let resultado = ""

do{
    let cadena = prompt("ingrese su texto")
if(resultado==""){
resultado=resultado+cadena
}else{
    resultado=resultado+"-"+cadena
}}while (confirm("¿desea seguir?"))
    document.write(resultado)
                           