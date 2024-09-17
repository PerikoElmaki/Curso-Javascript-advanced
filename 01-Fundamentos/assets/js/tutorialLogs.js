// comentarios con ctrl+ç
console.log('hola mundo');

alert('hola desde js');

// tipos de variables 
let a=10; // forma actual de declarar 
var b=10;

// constante 
const c=10;

let d = 10,
    e = 20,
    f = 'manuel';

let x = d + e;

// para saber a que variable se refiere, en vez de hacer esto 
// console.log('x',x);
// console.log('a',a);
// console.log('f',f);

// localizamos con {}, y muestra el nombre de variable junto a su valor
console.log({ x });
console.log({ a });
console.log({ f });

// otra forma de mostrar valor de variables
// Se crea una tabla to guapa 
console.table({ a, b, c, d, f}); 

// Para saber el valor de algo sin poner el log, 
// puedes usar la terminal y escribir el nombre de la variable 

// pàra sabert tipo de variable 
console.log(typeof f);