const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [5, 3, 4, 543, 2341235];

function sumNumbers(numberList) {
  let total = 0;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    total += number;
  }
  console.log(total);
}

sumNumbers(numbers);
sumNumbers(numbers2);
