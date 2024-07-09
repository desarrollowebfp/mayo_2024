const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(list) {
  const uniques = [];
  for (const item of list) {
    if (!uniques.includes(item)) {
      uniques.push(item);
    }
  }
  console.log(uniques);
}

removeDuplicates(duplicates);
