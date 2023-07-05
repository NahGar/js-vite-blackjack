/**
 * Esta función devuleve la última posición del arreglo (mazo) y lo devuelve
 * @param {Array<String>} mazo Ejemplo: ['AC','JC','4D','KD']
 * @returns {String} Ejemplo: KD 
 */
export const pedirCarta = ( mazo ) => {

    if( !mazo || mazo === 0 ) throw new Error('mazo es obligatorio como un arreglo de string');

    // pop() borra el último item del arreglo y lo devuelve
    return mazo.pop();
}
