function Max(arreglo = []) {
    let max = 0;
    if (arreglo.length > 0) {
        for (let i = 0; i < arreglo.length; i++) {
            if (arreglo[i] > max) {
                max = arreglo[i];
            }
        }
    } else {
        return console.log('El Valor Es: ' + undefined);
    }
    return console.log(`El numero Max Es: ${max}`);
}

Max([1, 2, 3]);
Max([10, 9, 8, 7, 16, 25, 4]);
Max([]);