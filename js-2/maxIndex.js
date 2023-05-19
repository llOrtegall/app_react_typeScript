function maxIndex(numbers = []) {
    if (numbers.length === 0) {
        return console.log(`El Arreglo esta vacio [-1]`);
         // Si el arreglo está vacío, retorna -1
    }

    let maxIndex = 0;
    let maxNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
            maxIndex = i;
        }
    }

    return console.log(`El número con mayor valor se encuentra en el
    indice Numero: [${maxIndex}]`);
    
}

maxIndex([2, 4, 5, 7, 20, 13, 5])
maxIndex([1, 3, 2]) // 1
maxIndex([10, 9, 8, 7, 6, 5, 4]) // 0
maxIndex([]) // -1