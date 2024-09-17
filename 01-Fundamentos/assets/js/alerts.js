

alert('hola mundo');

// propmt devuelve un string, lo que el usuario introduce
let nombre = prompt('Cuál es tu nombre?','Introduce nombre');

// si cancela es nulo, si lo deja vacío es otra cosa
if(nombre==null){
    console.log(nombre+ ' es nulo');
}

let respuesta=confirm('Está seguro ?');
// devuelve booleano ç
console.log(respuesta);