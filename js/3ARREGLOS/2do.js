 
 let ciudadesIngresadas=[]
for (let i = 0; i < ciudades; i++) {
    ciudadesIngresadas=prompt("ingrese su ciudad")
    document,write(`<br>${ciudadesIngresadas}`)
}
let ciudadesIngresadas = prompt("ingrese ciudades")


 ciudades.push(ciudadesIngresadas);

 document.write (ciudadesIngresadas.length)
 document.write(ciudadesIngresadas[0])
 document.write(ciudadesIngresadas[2])
 document.write(ciudadesIngresadas[length-1])
 ciudadesIngresadas.push("Paris")
 document.write(ciudadesIngresadas);
 document.write(ciudadesIngresadas[1])
 ciudadesIngresadas[1]="Barcelona"
