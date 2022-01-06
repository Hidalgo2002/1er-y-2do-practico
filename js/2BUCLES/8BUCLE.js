let numero= prompt("ingrese su numero igual o menor a 50")
let i 
let repeticion;
if(numero<=50){
for(i=1; i<=numero; i++){
    for(repeticion=0; repeticion<i; repeticion++){
        document.write(i)
    }
    document.write("<br>")
}
}else{
    alert("debe introducir un numero igual o menor a 50")
}