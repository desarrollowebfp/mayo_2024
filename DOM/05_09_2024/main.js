//Voy a recuperar el botón y lo almaceno en un nodo
const clickBtn = document.querySelector("#clickBtn");
//Le vamos a añadir un escuchador de eventos
clickBtn.addEventListener("click", () => {
  clickBtn.textContent = "Clickado";
  clickBtn.disabled = true;
});

//Recupero result
const result = document.querySelector("#result");
//Recupero el input
const textInput = document.querySelector("#textInput");

//Le añadimos un evento al input
textInput.addEventListener("input", (ev) => {
  result.textContent = ev.target.value;
});

//

/* document.addEventListener("scroll", (ev) => {
  if(ev.target.defaultView.pageYOffset > 2000){
    alert("Has llegado abajo")
  }
}); */
