//* 1. Crear una variable llamada receta e inicialízalo con un objeto literal vacío.
let receta = {};

//* 2. Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre = "Sandwich";

//* 3. Agrégale una propiedad ingredientes con un arreglo vacío.
receta.ingredientes = [];

//* 4. Agrega un objeto al arreglo ingredientes con las siguientes propiedades: nombre: “Pan” cantidad: 2
receta.ingredientes.push({ nombre: "Pan", cantidad: 2 });

//* 5. Agrega otro ingrediente al arreglo con las siguientes propiedades: nombre: “Queso” cantidad: 1
receta.ingredientes.push({ nombre: "Queso", cantidad: 1 });

//* 6. Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer “Pan”.
console.log(receta.ingredientes[0].nombre);

//* 7. Suma todos las cantidades de los ingredientes y muestra el resultado en consola.
console.log(
    receta.ingredientes
        .map((ingrediente) => ingrediente.cantidad)
        .reduce((total, cantidad) => total + cantidad)
);