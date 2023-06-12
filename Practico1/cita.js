let cita='Tres tristes tigre comen trigo en un trigal '; substring='tigre comen trigo';
let tamañoDeCita;
let indice;
let citaRevisada;

tamañoDeCita=cita.length;
indice=cita.indexOf('tigre comen trigo')
citaRevisada=cita.split("en un trigal ")

console.log("El tamaño de cita es: "+tamañoDeCita);
console.log("El indice del substring es: "+indice);
console.log(citaRevisada);