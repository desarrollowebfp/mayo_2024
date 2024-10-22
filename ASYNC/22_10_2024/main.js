import "./style.css";

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
  .then((data) => data.json())
  .then((data) => console.log(data));
