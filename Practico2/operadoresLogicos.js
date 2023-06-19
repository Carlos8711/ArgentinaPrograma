const readlineSync = require('readline-sync');
const numero  = readlineSync.question('Ingresa un numero entero ? \n');

if (numero==0){
    console.log("El numero es cero")
     
    }else{

        if(numero>0 && numero%2==0){
            console.log("El numero es positivo y par")

        }else if(numero>0 && numero%2!=0){

        console.log("El numero es positivo e impar")
        }else {
            console.log("El numero es negativo")
        }
        
    }