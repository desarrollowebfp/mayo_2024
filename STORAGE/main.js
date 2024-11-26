/* //Definimos elementos en el localStorage
localStorage.setItem("user", "Juan");
//Acceder a los elementos del localStorage
console.log(localStorage.getItem("user"));

localStorage.removeItem("user");
localStorage.clear(); */

document.querySelector("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.querySelector("#themeBtn").textContent = "Light";
    localStorage.setItem("theme", "dark");
  } else {
    document.querySelector("#themeBtn").textContent = "Dark";
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.querySelector("#themeBtn").textContent = "Light";
  } else {
    document.body.classList.remove("dark");
    document.querySelector("#themeBtn").textContent = "Dark";
  }
});
