import _ from 'underscore';
//import { crearMazo as crearNuevoMazo } from './usecases/crear-mazo.js';

//import {crearMazo} from './usecases/crear-mazo.js';
//import {pedirCarta} from './usecases/pedir-carta.js';
//import {valorCarta} from './usecases/valor-carta.js';
//Para evitar las 3 líneas de arriba, se creó index.js en la carpeta usecases
import {crearMazo, pedirCarta, crearCartaHTML, acumularPuntos, procesoComputadora} from './usecases';

/*
C-tréboles, D-diamantes, H-corazones, S-espadas
*/

let mazo         = [];
const tiposDeCarta = ['C','D','H','S'],
      tiposDeCartaEspeciales = ['A','J','Q','K'];

let puntosJugadores = [];
let turnoComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir'),
      btnDetener = document.querySelector('#btnDetener'),
      btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
      puntosHTML = document.querySelectorAll('small');


const inicializarJuego = ( numJugadores = 1 ) => {

    mazo = crearMazo(tiposDeCarta, tiposDeCartaEspeciales);

    turnoComputadora = numJugadores;
    const cantJugadores = numJugadores + 1; //agrega a computadora

    puntosJugadores = [];
    for( let i = 0; i < cantJugadores; i++) {
        puntosJugadores.push(0);
        //puntosHTML[i].innerText = 0;
        divCartasJugadores[i].innerHTML = '';
    }
    //puntosJugadores.push(0); //agrega a la computadora
    

    //esta es otra forma de hacer lo que está dentro del for
    puntosHTML.forEach( elem => elem.innerText = 0 );
    
    btnPedir.disabled   = false;
    btnDetener.disabled = false;
}


// Eventos ---------------------------------------------------------------
window.addEventListener("load", () => { 
    inicializarJuego();
});

btnPedir.addEventListener('click', () => {

    const carta = pedirCarta( mazo );        
    const puntosJugador = acumularPuntos( carta, 0, puntosJugadores, puntosHTML );
    const imgCarta = crearCartaHTML( carta );
    divCartasJugadores[0].append( imgCarta );

    if ( puntosJugador > 21 ) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        procesoComputadora( puntosJugador, mazo, turnoComputadora, divCartasJugadores, 
                            puntosJugadores, puntosHTML );

    } else if ( puntosJugador === 21 ) {
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        procesoComputadora( puntosJugador, mazo, turnoComputadora, divCartasJugadores, 
                            puntosJugadores, puntosHTML );
    }

});

btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    procesoComputadora( puntosJugadores[0], mazo, turnoComputadora, divCartasJugadores, 
                        puntosJugadores, puntosHTML );
});

btnNuevo.addEventListener('click', () => {

    inicializarJuego();

});





