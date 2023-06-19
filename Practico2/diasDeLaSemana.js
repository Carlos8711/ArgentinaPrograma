const readlineSync = require('readline-sync');
const numero  = readlineSync.question('Ingresa un numero del 1 al 7 ? \n');

switch(numero){
case '1':
    console.log("hoy es Lunes")
break;
    case '2':
        console.log("hoy es Martes")
    break;
        case '3':
            console.log("hoy es Miercoles")
        break;
            case '4':
                console.log("hoy es Jueves")
            break;
                case '5':
                    console.log("hoy es Viernes")
                break;
                    case '6':
                        console.log("hoy es Sabado")
                    break;
                        case '7':
                            console.log("hoy es Domingo")
                        break;
default: 
console.log("Número inválido");
break;
}

