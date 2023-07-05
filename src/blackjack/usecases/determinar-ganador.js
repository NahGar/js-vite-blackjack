/**
 * Determina el ganador
 * @param {Array<Number>} puntosJugadores Los puntos de los jugadores
 */
export const determinarGanador = ( puntosJugadores ) => {

    const [ puntosJugador, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if( puntosComputadora === puntosJugador ) {
            alert('Nadie gana :(');
        } else if ( puntosJugador > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador gana');
        } else if( puntosComputadora > puntosJugador ) {
            alert('Computadora gana')
        }
    }, 1500 );
}