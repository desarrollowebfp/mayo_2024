import "./Gallery.css";
import data from "../data/data";
const { articles } = data;

const Gallery = () => `
<main>
  <h2>Gallery</h2>
  <ul>
    ${articles.map(
      (article) => `
    <li>
      <h3>${article.productName} - ${article.brand}</h3>
      <p>${article.size} - ${article.color}</p>
      <img src="${article.photo}" alt="${article.productName}" />
      <p>${article.priceInEuros}€<p>
    </li>
    `
    ).join("")}
  </ul>
</main>
`;

export default Gallery;
