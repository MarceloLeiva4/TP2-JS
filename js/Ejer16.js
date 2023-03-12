let cadena = prompt("Introduce un Texto:");
let numero = cadena.length;
let j;
let caracter;
let salida = "";
for (j = 0; j < numero; j++) {
    caracter = cadena.charAt(j);    //recupera el caracter i del string.
    salida = caracter + salida;
}
document.write(salida);