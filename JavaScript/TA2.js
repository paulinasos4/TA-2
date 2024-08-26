function reverseString(texto) {
    if (typeof texto !== 'string') {
        console.error('Solo puede ser texto');
        return; 
    }
    const textoInvertido = texto.split('').reverse().join('');
    console.log(textoInvertido);
}
reverseString("Paulina"); 