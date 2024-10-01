//Recuperamos el botón
const themeBtn = document.querySelector("#themeBtn");

//Le añadimos un evento al botón
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "🌑";
  } else {
    themeBtn.textContent = "☀️";
  }
});
