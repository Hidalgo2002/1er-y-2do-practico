let frase = prompt("ingrese una frase");

console.log(frase);
console.log(frase.length);
console.log(frase.charAt(0));
// recorrer la frase con un bucle con for o while, el fin del bucle va a ser IGUAL A FRASE.LENGTH 
for(let i=0; i<frase.length; i++){
if (frase.charAt(i)== "A"|| frase.charAt(i)=="E"|| frase.charAt(i)=="I"|| frase.charAt(i)=="o"|| frase.charAt(i)=="U")
document.write(frase.charAT(i))}