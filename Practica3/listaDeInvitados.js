
const ListaPersonas=["Jose","Maria","Juan","Andres","Leonel","Sophie","Leandro","Emilia"];
const ListaAdmitidos=[];
const ListaRechazados=[];
var a=0;r=0;

for(let i=0; i<ListaPersonas.length;i++){
    if(ListaPersonas[i]==="Sophie" || (ListaPersonas[i]==="Jose")){
        console.log("rechazados %s", ListaPersonas[i]);
        ListaRechazados[r]=ListaPersonas[i];
        r++;
    }
    else{
        console.log("Admitidos %s", ListaPersonas[i]);
        ListaAdmitidos[a]=ListaPersonas[i];
        a++;
    }

}
console.log("\n------------------- \n");
console.log("La lista de invitados Admitidos es:\n");
for(let i=0;i<ListaAdmitidos.length;i++){
    console.log(ListaAdmitidos[i]);

};

console.log("\n------------------- \n");
console.log("La lista de invitados rechazados es: \n");
for(let i=0;i<ListaRechazados.length;i++){
    console.log(ListaRechazados[i]);

};

console.log("\n------------------- \n");
console.log("La lista ordernada de invitados Admitidos es:\n");
for(let i=0;i<ListaAdmitidos.length;i++){
    ListaAdmitidos.sort();
    console.log(ListaAdmitidos[i]);

};console.log("\n------------------- \n");
console.log("La lista ordenada de invitados rechazados es: \n");
for(let i=0;i<ListaRechazados.length;i++){
    ListaRechazados.sort();
    console.log(ListaRechazados[i]);

};