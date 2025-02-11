var alumnos = ["Alberto"];
var numeros = [1, 2, 3];
//Tipado con sintaxis de genéricos
//const alumnos:Array<string> = ["Alberto"];
var pokemons = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];
var pokemonsUppercase = pokemons.map(function (pokemon) { return pokemon.toUpperCase(); });
console.log(pokemonsUppercase);
