
//  Función anónima autoinvocada, usamos
(() => {
    // CUando unsamos función anónima, usamos el strict (restricciones al código para que sea seguro), BUENAS PRACTICAS
    'use strict'
    // DAría error si no declaramos variables. 



    // creamos deck de cartas 
    let deck = [];
    // tipos de cartas que va a contener el deck 
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'Q', 'J', 'K'];


    let puntosJugadores = [];

    // Referencias de html 
    const   btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnNuevoJuego = document.querySelector('#btnNuevo');


    const   divCartasJugadores = document.querySelectorAll('.divCartas'),
            puntosHTML = document.querySelectorAll('small');

    // por defecto los jugadores son 1 
    const inicializarJuego = (numJugadores = 2) => {
        deck = crearDeck();

        /*EN el array puntosJugadores, vamos a añadir posiciones con valor 0
            que indican el número de jugadores*/
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

    }

    const crearDeck = () => {
        deck = [];
        // usamos un bucle que cree el string con cada letra 
        for (let i = 2; i <= 10; i++) {
            // deck.push(i + 'C'); mejoramos eso
            // 'For of' va a ejecutar el bucle por cada tipo, cada valor q tiene ese array
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }

        // Ptro for para las especiales 
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }
        // hacemos uso de la libreria para desordenar el deck 
        return _.shuffle(deck);
    }



    // Función pedir carta 
    const pedirCarta = () => {
        // controlamos que no haya más cartas 
        if (deck.length === 0) {
            // muestra error en consola
            throw 'No hay cartas en la baraja';
        }
        // usamos pop, para eliminar el ultimo elemento del array, y a parte lo devuelve
        return deck.pop();
    }

    // Para sacar los puntos de cada carta 
    const valorCarta = (carta) => {
        // necesitamos coger sólo el número de la carta, sin la letra 
        // los string se tratan como arrays
        const valor = carta.substring(0, carta.length - 1);

        //CONDICION TERNARIA. si es A vale 11, si es otra letra 10
        return (isNaN(valor)) ?             //primer if, si no es num 
            (valor === 'A') ? 11 : 10     // si es un As, 11, si es otra letra 10 
            : valor * 1;                    //si no es letra, usamos el valor del num

        // // funcion para comprobar si es numero o no 
        // if( isNaN( valor )){
        //     // no es numero 
        //     puntos = ( valor === 'A' ) ? 11 : 10;
        // }else {
        //     puntos = valor * 1; // fuerzas a que sea int  
        // }

    }
    // Turno: 0 = primer jugador, el último será el crupier
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }
    
    const crearCarta = ( carta, turno) => {
        // mostramos carta
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${carta}.png`;  //esto coge el nombre de la carta y busca imagen
        // añadimos imgCarta a la clase de css
        imgCarta.classList.add('carta');
        
        divCartasJugadores[turno].append(imgCarta);


    }
    const turnoPC = (puntosMinimos) => {
        let puntosCrupier = 0;
        do {
            const carta = pedirCarta();
            // La última posicion de puntosjugador  es el pc
            puntosCrupier = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);
            // // mostramos carta
            // const imgCarta = document.createElement('img');
            // imgCarta.src = `assets/cartas/cartas/${carta}.png`;  //esto coge el nombre de la carta y busca imagen
            // // añadimos imgCarta a la clase de css
            // imgCarta.classList.add('carta');
            // divCartasCrupier.append(imgCarta);

            // si esmayor a 21 ya ha perdido. terminamos
            if (puntosMinimos > 21) {
                break;
            }

        } while ((puntosCrupier < puntosMinimos) && (puntosMinimos <= 21));

        setTimeout(() => {


            if (puntosCrupier === puntosMinimos) {
                alert('Nadie gana');
            } else if (puntosMinimos > 21) {
                alert('Crupier gana gay');
            } else if (puntosCrupier > 21) {
                alert('EL jugador gana!!!!!!!!!!!!!');
            } else
                alert('Crupier gana');

        }, 20);
    }

    // ++++++++++EVENTOS +++++++++++++

    // funcion con un callback (dentro otra funcion) esta es de flecha
    btnPedir.addEventListener('click', () => {

        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);
   

        if (puntosJugador > 21) {
            console.warn('Mamaste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPC(puntosJugador); //ahora va el pc
        } else if (puntosJugador === 21) {
            console.warn('21, GANASTE');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoPC(puntosJugador);
        }
    })


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPC(puntosJugador);
    })

    btnNuevoJuego.addEventListener('click', () => {
        inicializarJuego();
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        // vaciamos deck 
        deck = [];
        deck = crearDeck();
        // Hay que reiniciar todos los puntos 
        // puntosJugador = 0;
        // puntosCrupier = 0;    
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

       
       

    })

})();
