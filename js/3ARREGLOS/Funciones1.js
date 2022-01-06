let ingresado=parseInt(prompt("ingrese su numero"))
let parOImpar=(numero)=>{
    if(Number(numero==numero)){
        if(numero%2==0){
       document.write("su numero "+numero+" es PAR")
       
    }else{
        document.write("su numero "+numero+" es impar")
     }}else{
       document.write("su valor no es un numero")
    }
let numerodevuelto = numero
return numerodevuelto
}
parOImpar(ingresado)
