//GET
fetch("http://localhost:3000/movies")
  .then((res) => res.json())
  .then((res) => {
    for (const movie of res) {
      document.querySelector("main").innerHTML += `
      <article>
      <h2>${movie.title}</h2>
      <h3>${movie.year} - ${movie.category}</h3>
      <img src="${movie.poster}" alt="${movie.title} Poster"/>
      </article>
      `;
    }
  })
  .catch((err) => {
    console.log(err);
  });

//POST
document.querySelector("#postBtn").addEventListener("click", () => {
  fetch("http://localhost:3000/movies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "Ebola Rex",
      year: 2024,
      category: "B-Movie",
      poster:
        "https://m.media-amazon.com/images/I/91bdznOGqqL._AC_UF894,1000_QL80_.jpg",
    }),
  });
});

//DELETE
document.querySelector("#deleteBtn").addEventListener("click", () => {
  fetch("http://localhost:3000/movies/1", {
    method: "DELETE",
  });
});

//PUT
document.querySelector("#patchBtn").addEventListener("click", () => {
  fetch("http://localhost:3000/movies/1", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      year: 2022,
      director: "Paco"
    }),
  });
});
