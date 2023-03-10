document.write("<hr>");

var i;
var j = 500;
var rep = 0;
//BUCLE DESDE 1 HASTA j
for (i = 1; i <= j; i++) {
    //IMPRIMIMOS EL NÚMERO i
    document.write(i);
    //RESTO DE DIVIDIR i/4 ES IGUAL A 0
    if (i % 4 == 0) {
        document.write("(Multiplo de 4)");
    }
    //RESTO DE DIVIDIR i/9 ES IGUAL A 0
    if (i % 9 == 0) {
        document.write("(Multiplo de 9)");
    }
    //SALTO DE LÍNEA
    document.write("<br>");
    //SI ES MÚLTIPLO DE 5 IMPRIMIMOS UNA LÍNEA HORIZONTAL
    if (i % 5 == 0) {
        document.write("<hr>");
    }
}