const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const alumnos = [
  "Pedro Samuel",
  "Marcos",
  "Santiago",
  "Loli",
  "Marina",
  "Alberto",
  "Helder",
  "Mariano Perez Heredia"
];

//Aqui declaramos la función que recibe una lista por argumento
function findLongestWord(stringList) {
  //Declaramos una variable con un string vacio
  let longestWord = "Captain A.";
  //Recorremos nuestra lista
  for (let i = 0; i < stringList.length; i++) {
    //Almacenamos en una constante cada uno de los elementos de la lista
    const string = stringList[i];
    //Si el elemento de la lista es más largo en esta vuelta que la longestWord, me quedo con ella
    if(string.length > longestWord.length){
      longestWord = string;
    }
  }
  console.log("La palabra más larga es: " + longestWord)
}

//Ejecutamos la funcion y le pasamos avengers
findLongestWord(avengers);

findLongestWord(alumnos)
