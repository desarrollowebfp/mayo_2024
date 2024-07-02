const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function average(list) {
  let total = 0;
  for (const item of list) {
    if (typeof item === "string") {
      total += item.length;
    } else {
      total += item;
    }
  }
  const promedio = total / list.length;
  console.log(promedio);
}

average(mixedElements);
