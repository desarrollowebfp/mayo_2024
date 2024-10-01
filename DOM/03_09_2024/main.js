//READ
//Recuperamos un elemento
const parrafo = document.querySelector("#parrafo");
console.log(parrafo.textContent);
//Recuperamos varios elementos
const elementosLista = document.querySelectorAll(".listitem");

//UPDATE
parrafo.textContent = "Adios";

//DELETE
parrafo.remove();

//CREATE
const titulo = document.createElement("h1");
titulo.textContent = "Mi titulo";
titulo.className = "title";

document.body.appendChild(titulo);

//EJEMPLO
//Recupero el elemento ranking ol
const ranking = document.querySelector("#ranking");

const concursantes = [
  "Juan",
  "Daniel",
  "Pedro",
  "Amparo",
  "Helder",
  "Ivan",
  "David",
  "Juan",
  "Daniel",
  "Pedro",
  "Amparo",
  "Helder",
  "Ivan",
  "David",
  "Juan",
  "Daniel",
  "Pedro",
  "Amparo",
  "Helder",
  "Ivan",
  "David",
];

concursantes.reverse();

for (const concursante of concursantes) {
  const li = document.createElement("li");
  li.textContent = concursante;
  ranking.appendChild(li);
}
