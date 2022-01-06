let numero= prompt("pone el numero de ewscalones de la piramide")//40
if(Number(numero==numero)){//Number(numero)==numero)){
// validar el tope de la piramide
if(numero>0 && numero<=50 ){
let repeticion
let i
// crear el 1er ciclo FOR para hacer la piramide desde el "i" hasta el 1
for (i=numero; i>=1; i--) {
// crear bucle interno para dibujar la piramide
for(repeticion=i; repeticion>=1;repeticion--){
    document.write(i);
}
document.write("<br>")
 }
  }else{
      alert("el valor introducido no es valido");
  }
   }else{
       alert("no es un valor numerico");
   }