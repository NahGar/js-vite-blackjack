import { pedirCarta, acumularPuntos, crearCartaHTML, determinarGanador } from "./";

/**
 * Ejecuta el turno de la computadora
 * @param {Number} puntosMinimos Son los puntos que debe igualar para empatar 
 * @param {Array<String>} mazo El mazo de cartas 
 * @param {Numeric} turnoComputadora 
 * @param {Array<HTMLDivElement>} divCartasJugadores El nodo donde cargar las imágenes de las cartas 
 * @param {Array<Number>} puntosJugadores Los puntos de los jugadores 
 * @param {HTMLElement} puntosHTML El nodo donde cargar los puntos 
 */
export const procesoComputadora = ( puntosMinimos, mazo, turnoComputadora, divCartasJugadores, puntosJugadores, puntosHTML ) => {

    if( !puntosMinimos ) throw new Error('puntosMinimos son necesarios');
    if( !mazo || mazo === 0 ) throw new Error('mazo es obligatorio como un arreglo de string');
    if( !turnoComputadora ) throw new Error('turnoComputadora es necesario');
    if( !divCartasJugadores ) throw new Error('divCartasJugadores es necesario');
    if( !puntosJugadores ) throw new Error('puntosJugadores es necesario');
    if( !puntosHTML ) throw new Error('puntosHTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( mazo );
        puntosComputadora = acumularPuntos( carta, turnoComputadora, puntosJugadores, puntosHTML );
        
        const imgCarta = crearCartaHTML( carta );
        divCartasJugadores[turnoComputadora].append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  /*&& (puntosMinimos <= 21 )*/ );

    determinarGanador( puntosJugadores );
}