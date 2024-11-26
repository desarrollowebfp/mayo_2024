import "./Footer.css";
import data from "../../data";
const { copyright } = data;

const template = () => `
<p id="copy_text"></p>
`;

const listeners = () => {
  document.querySelector("#copy_text").textContent = copyright;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
  listeners();
};

export default Footer;
