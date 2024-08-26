function removeFromArray(arreglo, item) {
    if (!Array.isArray(arreglo)) {
        console.error('Tiene que ser un arreglo (1,2,3) (banana, manzana, pera)');
        return; 
    }
    const index = arreglo.indexOf(item);
    if (index !== -1) {
        arreglo.splice(index, 1);
    } else {
        console.warn('no se encuentra adentro del arreglo.');
    }
    console.log(arreglo);
}
const miArreglo = [1, 2, 3, 4, 5];
removeFromArray(miArreglo, 3)
