let frase = prompt("Ingrese una frase");

console.log(frase);
console.log(frase.length);
console.log(frase.charAt(1));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());


frase= frase.toLowerCase();
for(let i=0; i< frase.length;i++){
    if(frase.charAt(i)== "a" || frase.charAt(i)== "e" || frase.charAt(i)== "i" || frase.charAt(i)== "o" || frase.charAt(i)== "u" ){
        document.write(frase.charAt(i));
    }
}