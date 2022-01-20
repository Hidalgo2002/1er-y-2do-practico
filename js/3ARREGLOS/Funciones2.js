
function compuesta(frase){
        if(frase===frase.toLowerCase()) {
        document.write("la frase "+frase+" esta formado x minisculas")
    }
    else if(frase===frase.toUpperCase()) {
        document.write("la frase: "+ frase+" esta formado x MAYUSCULAS")
    }
    else {
        document.write("la frase: "+frase+" esta formado x MAYUSCULAS y minusculas")
    }
     return resultado
}
      
  let fraseingresada=prompt("ingrese su fuckin frase")
compuesta(fraseingresada)                      
// TERMINADO