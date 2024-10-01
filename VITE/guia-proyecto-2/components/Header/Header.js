import "./Header.css";

const Header = (title) => {
  const header = document.createElement("header");
  header.innerHTML = `
  <h1>${title}</h1>
  <nav>
  <ul>
    <li>
      <a href="#null">Home</a>
    </li>
    <li>
      <a href="#null">Gallery</a>
    </li>
  </ul> 
  </nav>
  `;
  document.body.appendChild(header);
};

export default Header;
