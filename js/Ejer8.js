let numero = prompt("introduce un numero del 1 al 50");

if(numero > 0 && numero <=50){
    let rep,i;
    
    for(i=0; i<numero;i++){
        for (rep =1; rep <=i+1; rep++){
            document.write(rep);
        }
        document.write("<br>");
    }
} else{
    alert("el numero introducido no es valido");
}