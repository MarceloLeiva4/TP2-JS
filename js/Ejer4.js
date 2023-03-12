let acum = 0;
while(confirm('¿Desea continuar?') == true){
    let num = parseInt(prompt('Ingrese numeros, para terminar pulse Cancelar'));
    acum = acum + num;
 } 
 
  document.write( 'la suma es ' + acum);