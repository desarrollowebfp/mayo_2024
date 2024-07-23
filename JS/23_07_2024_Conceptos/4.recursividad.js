const countUp = (number) => {
  if (number > 0) {
    countUp(number - 1);
    console.log(number);
  }
};

countUp(10);
