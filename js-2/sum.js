//* En el mismo repositorio creado en la sesion anterior aspirantes-mir-javascript crear una rama develop desde la rama main

//* Crear una carpeta llamada js-2 dentro de la carpeta raiz del repositorio.

//* Ejercicios:
//* Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos

function Sum(arreglo = []) {

    if (arreglo.length > 0) {
        let suma = 0;
        for (let i = 0; i < arreglo.length; i++) {
            suma += arreglo[i];
        }
        return console.log(`La Suma Es: ${suma}`);
    } else {
        return console.log('La Suma Es: 0');
        
    }
}

Sum([1, 3, 5]);
Sum([10, 8, 12, 5]);
Sum([]);