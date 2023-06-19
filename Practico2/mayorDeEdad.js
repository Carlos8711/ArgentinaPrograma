
const readlineSync = require('readline-sync');
const Edad = readlineSync.question("Cual es tu Edad?");



if(Edad >= 18){
    console.log("Eres mayor de edad")
 }else{
     console.log("Eres menor de edad")
     
 }