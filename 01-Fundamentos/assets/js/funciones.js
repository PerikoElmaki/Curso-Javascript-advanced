// funcion tradicional
function saludar ( nombre ) {
    console.log( 'Hola ' + nombre );
}

saludar('Pedro');


// se pueden guardar en una constante 
const saludar2 = function() {
    console.log( 'Hola Maki ' );
}

// FUNCION FLECHA igual que tradicional, se le puede pasar parámetro
const saludarFlecha = (nombre) => {
    console.log('Hola Flecha '+ nombre );
}

saludar2();
saludarFlecha('Makinarias');


// funciones flecha se guardan como constantes, hacen el codigo limpio
// no contiene llaves
// en algún punto no funcionan las funciones tradicionales

function sumar(a, b){
    return a + b;
}

const sumarFlecha = (a, b) => a + b;