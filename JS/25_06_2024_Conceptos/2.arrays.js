const animales = ["Perro", "Gato", "Loro", "Cigüeña"];
const dinosaurios = ["T-Rex", "Triceratops", "Pterodactilo"];

console.log(animales[1]);
console.log(animales.length);
console.log(animales[animales.length - 1]);

//push
animales.push("Cocodrilo", "Tucan");
console.log(animales);
//pop
animales.pop();
console.log(animales);
//unshift
animales.unshift("Ornitorrinco");
console.log(animales);
//shift
animales.shift();
console.log(animales);
//reverse
animales.reverse();
console.log(animales);
//sort
animales.sort();
console.log(animales);

const numeros = [5, 23, 10, 120, 40, 4, 3, 32];
numeros.sort((a, b) => a - b);
console.log(numeros);

animales.splice(1, 3, "Cacatua", "Rata");
console.log(animales);

//concat
/* console.log(animales.concat(dinosaurios)); */
