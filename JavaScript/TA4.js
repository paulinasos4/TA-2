function sumAll(a, b) {
    let suma = 0;
    if (a > b) {
        console.error('El primer numero tiene que ser menor al segundo');
        return;
    }
    for (let i = a; i <= b; i++) {
        suma += i;
    }
    console.log(suma);
}
sumAll(1,8 ); {}