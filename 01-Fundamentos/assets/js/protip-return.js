
function crearPersona( nombre, apellido ){
    // va a devolver objeto literal 
    return {
        // nombre: nombre,    -SI ES EL MISMO NOMBRE Q ARGUMENTO
        // apellido: apellido -SE LO COME SIN ESPECIFICAR 
        nombre,
        apellido
    }
}

const persona = crearPersona( 'Pedro', 'Sandoval' );
console.log( persona );

// ahora en flecha 
// si quieres que devuelva un objeto, poner entre paréntesis, es como indicar return
const crearPersonaF = ( nombre, apellido ) => ({ nombre, apellido });

console.log( crearPersonaF('Maki','ElMejor') );


// una función que imprima argumentos que les pases sin antes definirlos 
function imprimeArgumentos(){
    console.log( arguments );
}

imprimeArgumentos(10, true, false, 'Periko',' maki');

// lo mismo en flecha 

const imprimeArgumentos2 = ( ...args ) => { console.log( args ) }

imprimeArgumentos2( 3, 'maricon',' ke');