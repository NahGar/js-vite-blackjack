import { valorCarta } from "./";

/**
 * Turno: 0-jugador1, último la computadora
 * @param {String} carta Es la carta que se acumula
 * @param {Numeric} turno De quién es el turno. 0-jugador1, último la computadora
 * @param {Array<Numeric>} puntosJugadores Son los puntos de cada jugador
 * @param {Array<HTMLElement>} puntosHTML Es el nodo donde se carga el puntaje
 * @returns {Numeric} Son los puntos del jugador
 */
export const acumularPuntos = ( carta, turno, puntosJugadores, puntosHTML ) => {

    puntosJugadores[turno] += valorCarta( carta );
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}