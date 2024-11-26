import "./style.css";
import Avatar from "./components/Avatar/Avatar";

document.querySelector("#app").innerHTML = `
  ${Avatar(
    {
      name: "Ignacio",
      img: "https://workshopexperience.com/wp-content/uploads/2017/11/retrato-de-autor-martin-schoeller-500x352.jpg",
    },
    "xl"
  )}
  ${Avatar(
    {
      name: "Alvaro",
    },
    "sm"
  )}
    ${Avatar(
      {
        name: "Alvaro",
        img: "https://content3.cdnprado.net/imagenes/Documentos/imgsem/b8/b8a3/b8a3b20e-034d-4ee7-8300-649d65343a93/7349ba23-acc1-3423-2891-22a6527da93e.jpg",
      },
      "md"
    )}

`;
