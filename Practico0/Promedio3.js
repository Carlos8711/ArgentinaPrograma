const primero=[5,7,9];
let segundo=[-2,-3,-8];
let tercero=[-1.2,5.3,-3.3];

 console.log("El promedio de 5,7 y 9 es: "+promedio(primero));
 console.log("El promedio de -2, 3 y -8 es: "+promedio(segundo));
 console.log("El promedio de -1.2,5.3 y -3.3 es: "+promedio(tercero));



function promedio(numeros){
    var pro;
    var numero;
    var sum=0;
    
    for(let i=0; i <numeros.length;i++){
        numero=numeros[i];
        sum+= numero;
    }
    
    return pro=sum/numeros.length;
}