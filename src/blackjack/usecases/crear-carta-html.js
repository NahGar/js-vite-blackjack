/**
 * Crea la carta en el HTML
 * @param {String} carta Carta a crear 
 * @returns {HTMLImageElement} imgCarta img de la carta
 */
export const crearCartaHTML = ( carta ) => {
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    //divCartasJugadores[turno].append( imgCarta );
    return imgCarta;
}