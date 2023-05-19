function Join(arreglo = []){
    let resultado = "";
    for (let i = 0; i< arreglo.length; i++){
        resultado += (' ' + arreglo[i]);
    }
    return resultado;
} 

arreglo = ['BMW', 'Chevrolet', 'Cadilac', 'Mazda', 'Ford']

console.log(Join(arreglo));
