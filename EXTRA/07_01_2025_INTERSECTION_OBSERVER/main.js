/* //Recuperar el elemento que queremos observar
const target = document.querySelector("#segundoParrafo");

//Configuramos las opciones del observador
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};

//Creamos el Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      target.classList.add("active");
    } else {
      target.classList.remove("active");
    }
  });
}, options);

//Empezar a observar a nuestro o nuestros elementos
observer.observe(target);
 */