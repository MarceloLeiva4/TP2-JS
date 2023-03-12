let cadena = prompt("Introduce una cadena de texto:");
let numero = cadena.length;    //Devuelve la longitud del string.
let caracter;
let i;
    for (i = 0; i < numero; i++) {
	caracter = cadena.charAt(i);    //recupera el caracter i del string.
	if (i == numero - 1) {
		document.write(caracter);
	}
	else {
		document.write(caracter + "-");
	}
    }