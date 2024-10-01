import "./style.css";

import Card from "./components/Card/Card";
import characters from "./data/characters";

for (const character of characters) {
  document.body.innerHTML += Card(character);
}
