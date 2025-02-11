const attack = (name: string, damage: number) : string => {
  return `${name} ha causado ${damage} puntos de daño!`;
};

attack("Bulbasaur", 40)

//VOID
let total = 0;

const sumaAlTotal = (num: number): void => {
  total += num
}