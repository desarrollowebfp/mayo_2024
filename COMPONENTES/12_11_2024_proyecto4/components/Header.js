import "./Header.css";
import data from "../data/data";
//Hacemos destructuring del objeto data para crear constantes individuales y hacer más breve el código
const { title, logo, hero, offer } = data;

const Header = () => `
<header>
  <section id="title">
    <h1>${title}</h1>
    <img src="${logo}" alt="ShopApp logo"/>
  </section>
  <section id="hero">
    <h2>${hero}</h2>
    <p>${offer}</p>
  </section>
</header>
`;

export default Header;
