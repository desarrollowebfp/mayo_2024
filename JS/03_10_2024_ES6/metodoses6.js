const peliculas = [
  { titulo: "El Padrino", genero: "Drama", calificacion: 9.2 },
  { titulo: "El Caballero Oscuro", genero: "Acción", calificacion: 9.0 },
  { titulo: "Pulp Fiction", genero: "Crimen", calificacion: 8.9 },
  { titulo: "Fight Club", genero: "Drama", calificacion: 8.8 },
  { titulo: "Inception", genero: "Acción", calificacion: 8.7 },
  { titulo: "Novia a la fuga", genero: "Acción", calificacion: 8.7 },
];

console.log("Hola");

//Map
const peliculasMap = peliculas.map((pelicula) => ({
  title: pelicula.titulo,
  category: pelicula.genero,
}));

console.log(peliculasMap);

//Filter
const peliculasFilter = peliculas.filter(
  (pelicula) => pelicula.genero === "Drama" && pelicula.calificacion > 8.9
);
console.log(peliculasFilter);

//Find
const peliculasFind = peliculas.find(
  (pelicula) => pelicula.titulo === "Pulp Fiction"
);
console.log(peliculasFind);

//Every
const peliculasEvery = peliculas.every(
  (pelicula) => pelicula.genero === "Drama"
);
console.log(peliculasEvery);
//Some
const peliculasSome = peliculas.some((pelicula) => pelicula.genero === "Drama");
console.log(peliculasSome);

//Includes
const peliculasIncludes = peliculas.filter((pelicula) =>
  pelicula.titulo.toLowerCase().includes("F".toLowerCase())
);
console.log(peliculasIncludes);

//Reduce
const result = peliculas.reduce(
  (acumulador, pelicula) => acumulador + pelicula.calificacion,
  0
);
console.log(result);

//Reduce como map
const mapResult = peliculas.reduce((acumulador, pelicula) => {
  acumulador.push(pelicula.titulo);
  return acumulador
}, []);
console.log(mapResult)