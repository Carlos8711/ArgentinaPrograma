const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingresa un numero\n");
if(numero%2==0){
    console.log("Es Positivo")
}else
{
    console.log("Es Negativo")
}