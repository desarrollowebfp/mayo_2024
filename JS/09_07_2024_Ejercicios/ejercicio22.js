const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
  { name: "Cheese", isVegan: false },
  { name: "Beef", isVegan: false },
];

const newFood = [];
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
//Creamos el contador de fruta
let fruitPos = 0;

for (const food of foodSchedule) {
  if (food.isVegan) {
    newFood.push(food);
  } else {
    newFood.push({ name: fruits[fruitPos], isVegan: true });
    fruitPos++;
  }
}

console.log(newFood);
