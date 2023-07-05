/**
 * Esta función devuleve la última posición del arreglo y lo devuelve
 * @param {String} carta Ejemplo: 'AC'
 * @returns {Number} valor de la carta. Ejemplo: 11 
 */
export const valorCarta = ( carta ) => {

    if( !carta ) throw new Error('carta es obligatoria');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}