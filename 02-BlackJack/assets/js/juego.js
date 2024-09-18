
//  Función anónima autoinvocada, usamos
(function() {
    // CUando unsamos función anónima, usamos el strict (restricciones al código para que sea seguro)
    'use strict'
    // A partir de aqui, está el código del programa
    
    
    // creamos deck de cartas 
    let deck = [];
    // tipos de cartas que va a contener el deck 
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'Q','J','K'];

     let puntosJugador = 0,
        puntosCrupier = 0;
    // let puntosJugadores = [];

    // Referencias de html 
    const   btnPedir         = document.querySelector('#btnPedir'),
            btnDetener       = document.querySelector('#btnDetener'),
            btnNuevoJuego    = document.querySelector('#btnNuevo');
   
    const puntosHTML       = document.querySelectorAll('small'); //Selecciona los smalls de recuento
   
    const divCartasJugador = document.querySelector('#jugador-cartas'); //el div donde se pone la imagen
    const divCartasCrupier = document.querySelector('#crupier-cartas');

    // por defecto los jugadores son 1 
    const inicializarJuego = ( numJugadores = 2 ) => {
        crearDeck();
        // Para ir creando jugadores, añadimos posiciones al array puntosJugadores
        for( let i = 0; i< numJugadores; i++ ){
            puntosJugadores.push(0);
        }
        console.log({ puntosJugadores });
    }

    const crearDeck = () => {
        deck = [];
        // usamos un bucle que cree el string con cada letra 
        for(let i=2; i<= 10; i++) {
            // deck.push(i + 'C'); mejoramos eso
            // 'For of' va a ejecutar el bucle por cada tipo, cada valor q tiene ese array
            for( let tipo of tipos )  { 
                deck.push(i + tipo);
            }
        }

        // Ptro for para las especiales 
        for( let tipo of tipos ){
            for( let esp of especiales){
                deck.push(esp + tipo);
            }
        }
        // hacemos uso de la libreria para desordenar el deck 
        return  _.shuffle( deck );
    }

   

    // Función pedir carta 
    const pedirCarta = () => {
        // controlamos que no haya más cartas 
        if ( deck.length === 0 ){
            // muestra error en consola
            throw 'No hay cartas en la baraja';
        }
        // usamos pop, para eliminar el ultimo elemento del array, y a parte lo devuelve
        return deck.pop();
    }

    // Para sacar los puntos de cada carta 
    const valorCarta = ( carta ) => {
        // necesitamos coger sólo el número de la carta, sin la letra 
        // los string se tratan como arrays
        const valor = carta.substring(0, carta.length-1);
        
        //CONDICION TERNARIA. si es A vale 11, si es otra letra 10
        return ( isNaN( valor ) ) ?             //primer if, si no es num 
                ( valor === 'A' ) ? 11 : 10     // si es un As, 11, si es otra letra 10 
                : valor * 1;                    //si no es letra, usamos el valor del num
        
        // // funcion para comprobar si es numero o no 
        // if( isNaN( valor )){
        //     // no es numero 
        //     puntos = ( valor === 'A' ) ? 11 : 10;
        // }else {
        //     puntos = valor * 1; // fuerzas a que sea int  
        // }
        
    }

    const acumularPuntos = () => {

    }
    // Turno del pc 
    const turnoPC = (puntosMinimos) => {

        do{
            const carta = pedirCarta();

            puntosCrupier= puntosCrupier + valorCarta( carta );
            puntosHTML[1].innerText = puntosCrupier;
            
            // tenemos que mostrar la carta 
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/cartas/${ carta }.png`;  //esto coge el nombre de la carta y busca imagen
            // añadimos imgCarta a la clase de css
            imgCarta.classList.add('carta');
            divCartasCrupier.append( imgCarta );
            
            // si esmayor a 21 ya ha perdido. terminamos
            if( puntosMinimos >21 ){
                break;
            }

        }while( (puntosCrupier < puntosMinimos) && ( puntosMinimos <=21 ) );

        setTimeout(() => {
            
        
        if( puntosCrupier === puntosMinimos){
            alert('Nadie gana');
        }else if ( puntosMinimos > 21){
            alert('Crupier gana gay');
        }else if( puntosCrupier > 21 ){
            alert('EL jugador gana!!!!!!!!!!!!!');
        }else
            alert('Crupier gana');

        }, 20 );
    }

    // ++++++++++EVENTOS +++++++++++++

    // funcion con un callback (dentro otra funcion) esta es de flecha
    btnPedir.addEventListener('click', () => {
        
        const carta = pedirCarta();

        puntosJugador = puntosJugador + valorCarta( carta );
        puntosHTML[0].innerText = puntosJugador;
        
        // tenemos que mostrar la carta 
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/cartas/${ carta }.png`;  //esto coge el nombre de la carta y busca imagen
        // añadimos imgCarta a la clase de css
        imgCarta.classList.add('carta');
        divCartasJugador.append( imgCarta );

        if (puntosJugador > 21 ){
            console.warn('Mamaste');
            btnPedir.disabled = true; 
            btnDetener.disabled = true; 
            turnoPC( puntosJugador ); //ahora va el pc
        } else if (puntosJugador === 21 ){
            console.warn('21, GANASTE');
            btnPedir.disabled = true;
            btnDetener.disabled = true; 
            turnoPC( puntosJugador );
        }
    })


    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoPC( puntosJugador );
    })

    btnNuevoJuego.addEventListener('click', () => {
        btnPedir.disabled = false;
        btnDetener.disabled = false;
        // vaciamos deck 
        deck = [];
        deck = crearDeck();

        // Hay que reiniciar todos los puntos 
        puntosJugador = 0;
        puntosCrupier = 0;    
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;
        
        divCartasCrupier.innerHTML = '';
        divCartasJugador.innerHTML = '';

    })

})();
