const IMC = (masaKG, estaturaM) => {
  const resultado = masaKG / (estaturaM * estaturaM);
  return printResult(resultado);
};

const printResult = (value) => {
  if (value < 18.5) {
    return "Peso bajo";
  } else if (value > 18.5 && value <= 24.99) {
    return "Normal";
  } else if (value >= 25 && value <= 29.99) {
    return "Sobrepeso";
  } else if (value >= 30) {
    return "Obesidad";
  } else {
    return "ERROR";
  }
};

const antonio = IMC(67, 1.79);
console.log(antonio)

