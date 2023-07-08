const readlineSync = require('readline-sync');
const vuel= require('readline-sync');
const OptionJ=["piedra","papel","tijera"]
let opU;
let opC;
let ganador;
let i=0;
let c=0;
let cant=1;
let v=0;



let vuelta=vuel.question("Cuantas partidas quieres jugar?\n ");
console.log("\nBIENVENIDO A PIEDRA, PAPEL O TIJERA..\n")
console.log("Elije una Opcion para comenzar\n")
while(v<vuelta){

    opU=obtenerJugadaUsuario();
    opC=obtenerJugadaComputadora();
    ganador=determinarGanador(opU,opC)  
    console.log("\nPartida "+cant++)
    vista();
    v++
                
}
if(c<i){
    console.log("\nGanador de una patida de "+vuelta+" es: El Usiario")

}else if(c>i){
    console.log("\nGanador de una partida de "+vuelta+" es: La Computadora")
}else{
    console.log("\nGanador de una partida de "+vuelta+" es: Un Empate")
}




//--------------------------------Funciones-------------------------/






function obtenerJugadaUsuario(){

  
do{  
    
    let opcion = readlineSync.question("0-PIEDRA\n1-PAPEL\n2-TIJERAS\n");
    let rU;
 
    if(opcion==0){
       return rU="piedra";
    }else if(opcion==1){
        return rU="papel";

    }else if(opcion==2){
        return  r="tijera";
    }else{
       console.log("\nINGRESASTE UN VALOR INCORRECTO, INTENTALO DE NUEVO.\n")
       
    }
    
}while(true)
    
   

}
function obtenerJugadaComputadora(){
    let x = Math.floor(Math.random()*3);
    let r;
    if(x==0){
        return r="piedra";
    }else if(x==1){
        return  r="papel";

    }else{
        return  r="tijera";
    }
   
}




function determinarGanador(oU ,oC){

if(OptionJ[0]==oU && OptionJ[2]==oC){
    i++
    return "Gana Usuario"
    }else if(OptionJ[0]==oU && OptionJ[0]==oC){
        return "Hubo empate"
            }
            else{
              
}



if(OptionJ[2]==oU && OptionJ[1]==oC){
    i++
    return "Gana el Usuario"
        }else if(OptionJ[2]==oU && OptionJ[2]==oC){
            return "Empate"
            }else{
                 
}

if(OptionJ[1]==oU && OptionJ[0]==oC){
    i++
    return "Gana el Usuario"
        }else if(OptionJ[1]==oU && OptionJ[1]==oC){
            return "Empate"
                }else{
                  
                    }
                    c++
                    return "Gano la Computadora"
}
function vista(){
    console.log("\nLa Computadora eligio: "+opC+"\n")
    console.log("La Usuario eligio: "+opU+"\n")
    console.log("El resultado fue: "+ ganador+"\n")
}
