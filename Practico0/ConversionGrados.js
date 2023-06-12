let var1F=50;
let var2F=75;
let gradosCelsius;

console.log("50 grados fahrenheit son en celsius: "+conversionGrado(var1F));

console.log("75 grados fahrenheit son en celsius: "+ conversionGrado(var2F));

function conversionGrado(num){
  
    let convertidoC=(num-32)*5/9

    return convertidoC;

}