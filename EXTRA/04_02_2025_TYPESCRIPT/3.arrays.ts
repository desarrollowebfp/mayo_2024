const alumnos: string[] = ["Alberto"];
const numeros: number[] = [1,2,3]

//Tipado con sintaxis de genéricos
//const alumnos:Array<string> = ["Alberto"];

const pokemons: string[] = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

const pokemonsUppercase = pokemons.map((pokemon: string) => pokemon.toUpperCase());
console.log(pokemonsUppercase);