// tutorial de objetos, pueden tener atributos como una clase en java

// TEnemos objeto personaje con atributos, uno compuesto, otro array. 
let personaje = {
    nombre: 'Toni Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat:34.044,
        lng:-114.3
    },
    trajes: ['Mark I', 'Mark V', 'EldeHulk']
};

// se accede a las properties como si fuesen getters en java
console.log('Nombre',personaje.nombre);
console.log('Coords',personaje.coords);

console.log('Nº de trajes: ',personaje.trajes.length);
console.log('Ultimo traje: ',personaje.trajes[ personaje.trajes.length - 1 ] );

// esto se puede hacer
const x='vivo';
console.log('VIvo',personaje.x);
