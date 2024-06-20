//FOR
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//1ª VUELTA -> i = 0 -> SE CUMPLE LA CONDICION -> ++ -> 0
//2ª VUELTA -> i = 1 -> SE CUMPLE LA CONDICION -> ++ -> 1
//3ª VUELTA -> i = 2 -> SE CUMPLE LA CONDICION -> ++ -> 2
//4ª VUELTA -> i = 3 -> SE CUMPLE LA CONDICION -> ++ -> 3
//5ª VUELTA -> i = 4 -> SE CUMPLE LA CONDICION -> ++ -> 4
//6ª VUELTA -> i = 5 -> NO SE CUMPLE -> SE ROMPE EL BUCLE

const firstName = "Peter Parker";

for (let i = 0; i < firstName.length; i++) {
  console.log(firstName[i]);
}

const numbers = [100, 12, 87, 8, 34, 234, 2, 9, 10, 20, 3];

let counter = 0;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  counter += number;
} 

for (const number of numbers) {
  counter += number;
}

console.log(counter);