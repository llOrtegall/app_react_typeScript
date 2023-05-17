function calcuarColor(num) {
  let color;
  if (num === 1) {
    color = "black";
  } else if (num === 2) {
    color = "blanco";
  } else if (num === 3) {
    color = "azul";
  } else {
    color = "verde";
  }
  return console.log(`El Color Es: ${color}`);
}

calcuarColor(1);
calcuarColor(2);
calcuarColor(3);
calcuarColor(4);
