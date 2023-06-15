const readlineSync = require('readline-sync');
const numero = readlineSync.question("Ingresa un numero entero del 1 al 12 \n");
let indice;
let meses = [
    {
      "Nombre": "Enero",
      "CantidadDeDias": 31,
      
    },
    {
    "Nombre": "Febrero",
      "CantidadDeDias": 28
      
    },
    {
    "Nombre": "Marzo",
     "CantidadDeDias": 31
          
    },
    {
    "Nombre": "Abril",
    "CantidadDeDias": 30
              
    },
    {
        "Nombre": "Mayo",
        "CantidadDeDias": 31,
        
      },
      {
      "Nombre": "Junio",
        "CantidadDeDias": 30
        
      },
      {
      "Nombre": "Julio",
       "CantidadDeDias": 31
            
      },
      {
      "Nombre": "Agosto",
      "CantidadDeDias": 31
                
      },
      {
        "Nombre": "Septiembre",
        "CantidadDeDias": 30,
        
      },
      {
      "Nombre": "Octubre",
        "CantidadDeDias": 31
        
      },
      {
      "Nombre": "Noviembre",
       "CantidadDeDias": 30
            
      },
      {
      "Nombre": "Diciembre",
      "CantidadDeDias": 31
                
      }
]

 meses.forEach(element => {
 indice=meses.indexOf(element)
  if(indice+1==numero){
      console.log("La cantidad de dias del mes de "+ element.Nombre+" es "+element.CantidadDeDias+"");
  }
      
 });

