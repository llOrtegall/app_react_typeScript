//* 1. Crea un objeto literal llamado "persona" con las siguientes propiedades: nombre, edad, ciudad y profesión.
const persona = {
    nombre: 'Juan',
    edad: 25,
    ciudad: 'Medellín',
    profesion: 'Programador'
}

//*2 .Imprime en la consola el objeto "persona" completo.
console.log(persona);

//* 3. Crea una función llamada "presentacion" que tome el objeto "persona" como argumento y devuelva una cadena de texto que incluya el nombre, la edad y la ciudad de la persona
const presentacion = (persona) => {
    return `Mi nombre es ${persona.nombre} y tengo ${persona.edad} años y vivimos en ${persona.ciudad}`;
}

//* 4. Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
const mensaje = presentacion(persona);

//* 5. Imprime en la consola el valor de la variable "mensaje".
console.log(mensaje);

//* 6. Agrega una nueva propiedad al objeto "persona" llamada "hobbies" que sea un arreglo con algunos pasatiempos.
persona.hobbies = ['Escuchar música', 'Leer', 'Programar'];

//* 7. Imprime en la consola la propiedad "hobbies" del objeto "persona".
console.log(persona.hobbies);

//* 8. Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
for (let i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}