var  Fruta=[];
Fruta[0]="Manzana";
Fruta[1]="Mandarina";
Fruta[2]="Pera";
Fruta[3]="Frutilla";
Fruta[4]="Naranja";

let ultima;
let primera;

for(i=0;i<Fruta.length;i++){

    if(i==0){
        primera=Fruta[i];
    }
    if(i==Fruta.length-1){
        
        ultima=Fruta[i];

    }

}
console.log("La primera fruta agregada fue: "+primera);
console.log("La ultima fruta agregada fue: "+ultima);
