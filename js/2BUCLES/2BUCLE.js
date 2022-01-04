let nota = prompt("Ingrese su nota");

// if (nota == 1 || nota == 2) {
//   document.write("Muy deficiente");
// } else if (nota == 3 || nota == 4) {
//   document.write("Insuficiente");
// } else if (nota == 5 || nota == 6) {
//   document.write("suficiente");
// } else if (nota == 7) {
//   document.write("bien");
// } else if (nota == 8 || nota == 9) {
//   document.write("muy bien");
// } else if (nota == 10) {
//   document.write("Excelente");
// } else {
//   document.write("Ingrese una nota valida");
// }

switch (nota) {
  case "1":
  case "2":
    document.write("Muy deficiente");
    break
  case "3":
  case "4":
    document.write("Insuficiente");
    break
  case "5":
  case "6":
    document.write("suficiente");
    break
  case "7":
    document.write("Bien");
    break
  case "8":
  case "9":
    document.write("muy bien");
    break
  case "10":
    document.write("Excelente");
    break
    default:
        alert("ingrese una nota valida");
}
