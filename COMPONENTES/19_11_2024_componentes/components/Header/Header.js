import "./Header.css";
import data from "../../data.js";
const { title, links } = data;

//Creamos la plantilla del contenido que va dentro de header
const template = () => `
<h1 id="title"></h1>
<nav>
  <ul id="links_container">
  </ul>
</nav>
`;

//Añadimos eventos o contenido de forma dinamica una vez exista nuestro template en el documento
const listeners = () => {
  //Le damos contenido al titulo
  document.querySelector("#title").textContent = title;
  //Le damos los links a nuestro listado
  for (const link of links) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.path;
    a.innerText = link.name;
    li.appendChild(a);
    document.querySelector("#links_container").appendChild(li);
  }
};

const Header = () => {
  //Inyectamos el template en su sitio
  document.querySelector("header").innerHTML = template();
  //Le añadimos los listeners o el contenido dinamico
  listeners();
};

export default Header;
