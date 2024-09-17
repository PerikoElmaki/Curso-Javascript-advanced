// Se trabaja casi igual que en java 

let hoy = new Date();

console.log(hoy);

// se usan funciones de clase date 
let dia=hoy.getDate(); 
// devuelve num del 0 al 6 (0 es domingo)
console.log(dia);

if(dia===6){
    console.log('Es sabado');
}else{
    console.log('No es sábado');
}