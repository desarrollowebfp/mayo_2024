const actors = [
  { name: "Leonardo DiCaprio", born: 1974 },
  { name: "Tom Hanks", born: 1956 },
  { name: "Meryl Streep", born: 1949 },
  { name: "Brad Pitt", born: 1963 },
  { name: "Johnny Depp", born: 1963 },
  { name: "Scarlett Johansson", born: 1984 },
  { name: "Jennifer Lawrence", born: 1990 },
  { name: "Denzel Washington", born: 1954 },
  { name: "Morgan Freeman", born: 1937 },
  { name: "Cate Blanchett", born: 1969 },
];

function calculateActorsAges(actorsList) {
  //Creamos un array vacio donde almacenaremos nuevos objetos
  const actorsByAge = [];
  //Creamos una nueva instancia de Date para poder usar los métodos de Date
  const date = new Date();
  //Creamos una constante que almacene el año del sistema
  const actualYear = date.getFullYear();
  //Se puede hacer en una linea
  //const actualYear = new Date().getFullYear();
  for (const actor of actorsList) {
    const item = {
      name: actor.name,
      age: actualYear - actor.born,
    };
    actorsByAge.push(item)
  }

  console.log(actorsByAge);
}

calculateActorsAges(actors);
