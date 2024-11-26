import "./style.css";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

document.querySelector("#app").innerHTML = `
  ${Header()}
  ${Gallery()}
`;
