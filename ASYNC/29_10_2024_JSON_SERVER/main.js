const APIURL = "http://localhost:3000/movies/";

//Añadimos los listeners
document.querySelector("#addMovieForm").addEventListener("submit", (ev) => {
  addMovie(ev);
});
document.querySelector("#editMovieForm").addEventListener("submit", (ev) => {
  updateMovie(ev);
});

const getMovies = () => {
  fetch(APIURL)
    .then((res) => res.json())
    .then((res) => {
      document.querySelector("#movieContainer").innerHTML = res
        .map(
          (movie) => `
      <article class="movie">
      <img src="${movie.poster}" alt="${movie.title}"/>
      <h3>${movie.title}</h3>
      <h4>${movie.year}</h4>
      <h4>${movie.director}</h4>
      <button onclick="editMovie(${movie.id})">Edit</button>
      <button onclick="deleteMovie(${movie.id})" >Delete</button>
    </article>`
        )
        .join("");
    })
    .catch((error) =>
      console.error("No se han podido cargar las peliculas", error)
    );
};

const addMovie = (ev) => {
  //Evitamos que recargue la pagina
  ev.preventDefault();
  //Configuramos la nueva pelicula
  const newMovie = {
    title: document.querySelector("#title").value,
    poster: document.querySelector("#poster").value,
    year: document.querySelector("#year").value,
    director: document.querySelector("#director").value,
  };

  fetch(APIURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMovie),
  })
    .then(getMovies)
    .then(() => document.querySelector("#addMovieForm").reset())
    .catch((error) =>
      console.error("No se ha podido agregar la película", error)
    );
};

const editMovie = (id) => {
  fetch(APIURL + id)
    .then((res) => res.json())
    .then((res) => {
      document.querySelector("#editId").value = res.id;
      document.querySelector("#editTitle").value = res.title;
      document.querySelector("#editPoster").value = res.poster;
      document.querySelector("#editYear").value = res.year;
      document.querySelector("#editDirector").value = res.director;
      document.querySelector("#editMovieForm").style.display = "block";
      document.querySelector("#addMovieForm").style.display = "none";
    });
};

const updateMovie = (ev) => {
  ev.preventDefault();
  const id = document.querySelector("#editId").value;
  const updatedMovie = {
    title: document.querySelector("#editTitle").value,
    poster: document.querySelector("#editPoster").value,
    year: document.querySelector("#editYear").value,
    director: document.querySelector("#editDirector").value,
  };

  fetch(APIURL + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedMovie),
  })
    .then(getMovies)
    .then(() => {
      document.querySelector("#editMovieForm").reset();
      document.querySelector("#editMovieForm").style.display = "none";
      document.querySelector("#addMovieForm").style.display = "block";
    })
    .catch((error) =>
      console.error("No se ha podido editar la película", error)
    );
};

const deleteMovie = (id) => {
  fetch(APIURL + id, {
    method: "DELETE",
  })
    .then(getMovies)
    .catch((error) =>
      console.error("No se ha podido agregar la película", error)
    );
};

//Ejecutamos por defecto getMovies
getMovies();
