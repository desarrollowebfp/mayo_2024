const tracks = [
  { title: "Enter Sandman", genre: "Metal" },
  { title: "Back in Black", genre: "Rock" },
  { title: "Bohemian Rhapsody", genre: "Rock" },
  { title: "Blinding Lights", genre: "Pop" },
  { title: "Old Town Road", genre: "Country" },
  { title: "Smells Like Teen Spirit", genre: "Grunge" },
  { title: "Bad Guy", genre: "Pop" },
  { title: "Thunderstruck", genre: "Rock" },
  { title: "Hotel California", genre: "Rock" },
  { title: "Stairway to Heaven", genre: "Rock" },
];

const music = {};

for (const track of tracks) {
  const genre = track.genre;
  const title = track.title;
  //Comprobamos si no tenemos la clave en music y la creamos
  if (!music[genre]) {
    music[genre] = [];
  }
  //Como en cada condicional ya se habrá creado la clave correspondiente podemos empujar al array vacio los titulos de las canciones
  music[genre].push(title);
}
console.log(music);
