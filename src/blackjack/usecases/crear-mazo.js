import _ from 'underscore';

//export const crearMazo = (tiposDeCarta, tiposEspeciales) => {
/**
 * Esta función crea un nuevo mazo
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} Ejemplo: ['AC','JC','4D','KD']
 */
export const crearMazo = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta === 0 ) throw new Error('tiposDeCarta es obligatorio como un arreglo de string');
    if( !tiposEspeciales || tiposEspeciales === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let mazo = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            mazo.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            mazo.push( esp + tipo);
        }
    }

    return _.shuffle( mazo );
}

//export default crearMazo;
