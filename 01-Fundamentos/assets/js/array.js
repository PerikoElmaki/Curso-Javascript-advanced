// asi se hacen arrays 

let juegos=[ 'Zelda', 'Mario', 'Tus muertos'];

// el for each ejecuta una instruccion por cada uino de los elementos 
// por cada elemento, imprime el nombre, el indice y el array q es
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr});
});


// para insertar en array al final del mismo. Además devuelve el length del array
juegos.push( 'GTA redy');

// para añadir al principio,  devuelve nueva longitud tb 
juegos.unshift('Dark');

