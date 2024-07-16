const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telepathy" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutantList, power) {
  const foundMutants = [];
  for (const mutant of mutantList) {
    if (mutant.power === power) {
      foundMutants.push(mutant.name);
    }
  }
  if (foundMutants.length) {
    console.log(foundMutants);
  } else {
    console.log("No hay mutantes con este poder");
  }
}

findMutantByPower(mutants, "amor");
