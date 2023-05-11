function Suma(num) {

  console.log('Los numeros son: ')

  for(let i = 0; i <= num; i++) {
    
    console.log(' + ' +  i)
    
    var suma = i + i;
    
  }
  console.log(`El Total Es: ${suma}`)
}

//inserta el numero que quiere que se sume de forma consecutiva
Suma(10);
