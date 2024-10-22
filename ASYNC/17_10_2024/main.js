/* document.querySelector("h2").innerText = "Loading...";

fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json())
  .then((data) => {
    document.querySelector("h2").innerText = "Ready";
    console.log(data);
  })
  .catch((error) => {
    console.log(error.message);
  }); */

//ES6

const getCharacters = async () => {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const dataJSON = await data.json();
    printCharacters(dataJSON.results);
  } catch (error) {
    console.log(error.message);
  }
};

const printCharacters = (characters) => {
  for (const character of characters) {
    document.body.innerHTML += `<h2>${character.name}</h2>`;
  }
};

getCharacters();
