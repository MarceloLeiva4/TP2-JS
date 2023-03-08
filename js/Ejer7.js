let numrep = prompt("introduce un numero para que se genere la piramide invertida");

if(Number(numrep) == numrep){
    
    if(numrep > 0 && numrep <=50){
        let rep, i;

        for(i=numrep;i>=1;i--){
            for(rep=i;rep >=1; rep--){
                document.write(i);
            }
            document.write("<br>");
        }
    }
    else{
        alert("valor fuera de rango");
    }
}