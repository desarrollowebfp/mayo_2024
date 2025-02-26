//Importamos express, mongoose para hacer la conexion y el modelo Movie
const express = require("express");
const mongoose = require("mongoose");
const Movie = require("./models/movie");

//Inicializamos el servidor llamado "app" y definimos el puerto donde levantaremos nuestro servidor
const app = express();
const PORT = 8080;

//Utilizamos el middleware de express para parsear las peticiones a JSON
app.use(express.json());

//Le indicamos a mongoose que se conecte automaticamente al correr el servidor con la base de datos en local de Mongo
mongoose
  .connect("mongodb://localhost:27017/movies")
  .then(() => console.log("Conectado con MongoDB ✅"))
  .catch((error) => console.log("Error conectando con MongoDB ❌", error));

//Definimos los endpoints

//--------------------
//ENDPOINTS
//--------------------

//GET ALL MOVIES
app.get("/movies", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      error: "No se pueden mostrar las películas",
    });
  }
});
//POST A MOVIE
app.post("/movies", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({ error: "No se ha podido crear la película" });
  }
});
//FIND A MOVIE BY ID
app.get("/movies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    if (!movie) {
      res.status(404).json({ error: "No se encuentra la película" });
    }
    res.status(200).json(movie);
  } catch (error) {
    res
      .status(500)
      .json({ error: "No se ha podido efectuar la busqueda de la película" });
  }
});

//GET MOVIES POR ORDEN ALFABETICO
app.get("/movies_sorted", async (req, res) => {
  try {
    const movies = await Movie.find().sort({"title": 1});
    res.json(movies);
  } catch (error) {
    res.status(500).json({
      error: "No se pueden mostrar las películas",
    });
  }
});

//DELETE MOVIE
app.delete("/movies/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie) {
      res.status(404).json({ error: "No se ha encontrado la película" });
    }
    res.status(200).json("Película borrada correctamente");
  } catch (error) {
    res
      .status(500)
      .json({ error: "No se ha podido efectuar el borrado de la película" });
  }
});

//--------------------
//LEVANTAMOS EL SERVIDOR
//--------------------
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT} ⭐️`);
});
