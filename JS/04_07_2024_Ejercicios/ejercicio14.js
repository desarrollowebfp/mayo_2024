const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];
function repeatCounter(list) {
  const result = {};

  for (const item of list) {
    if(result[item]){
      result[item]++
    } else{
      result[item] = 1
    }
  }
  console.table(result)
}

repeatCounter(words);
