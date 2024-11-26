import "./style.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const createApp = () => {
  Header()
  Footer();
};

//Lanzamos la función createApp una vez se cargue el contenido en el navegador
document.addEventListener("DOMContentLoaded", () => {
  createApp();
});
