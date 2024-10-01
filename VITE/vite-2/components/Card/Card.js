import "./Card.css";

const Card = (character) => `
  <article class="card">
    <img src="${character.image}" alt="${character.name}"/>
    <h2>${character.name}</h2>
    <p>${character.description}</p>
  </article>
`;

export default Card;
