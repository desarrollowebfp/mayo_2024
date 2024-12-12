//Base URL
const API_URL = "http://localhost:3000/users";

//Recuperamos los formularios y secciones necesarias
const registerForm = document.querySelector("#registerForm");
const loginForm = document.querySelector("#loginForm");
const result = document.querySelector("#result");
const logoutBtn = document.querySelector("#logoutBtn");

//Manejo del registro
registerForm.addEventListener("submit", (ev) => {
  //Evitamos que recargue la página con el submit
  ev.preventDefault();
  //Recuperamos los campos de los inputs
  const username = document.querySelector("#registerForm>#usernameInput").value;
  const password = document.querySelector("#registerForm>#passwordInput").value;
  //Comprobamos que los campos están rellenos
  if (!username || !password) {
    alert("Completa los campos, por favor");
    return;
  }
  //Si tengo los campos completos
  try {
    //Hacemos una llamada a la base de datos para comprobar si el usuario que estamos registrando ya existe
    fetch(API_URL)
      .then((res) => res.json())
      .then((users) => {
        if (users.some((user) => user.username === username)) {
          alert("Este usuario ya existe");
          return;
        } else {
          //Creamos un nuevo usuario
          const newUser = {
            username: username,
            password: password,
          };
          //Lo insertamos en nuestra base de datos
          fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
          });
          alert("Usuario creado exitosamente");
          registerForm.reset();
        }
      });
  } catch (error) {
    console.error("Error registrando usuario", error);
  }
});

//Manejo del login
loginForm.addEventListener("submit", (ev) => {
  //Prevenimos la recarga de la pantalla
  ev.preventDefault();
  //Recuperamos los campos de los inputs
  const username = document.querySelector("#usernameInputLogin").value;
  const password = document.querySelector("#passwordInputLogin").value;
  //Hacemos la consulta a la base de datos
  fetch(API_URL)
    .then((res) => res.json())
    .then((users) => {
      //Vamos a buscar al usuario exacto
      const user = users.find(
        (user) => user.username === username && user.password === password
      );
      //Si no encontramos el usuario nos salimos y devolvemos un mensaje
      if (!user) {
        alert("Credenciales incorrectas");
        return;
      } else {
        //En este caso el login si ha funcionado
        result.innerHTML = `
        Welcome ${user.username}
        `;
        //Almacenamos el ususario en el localStorage
        localStorage.setItem("user", JSON.stringify(user));
        checkUser(user)
      }
    });
});

//Manejo del logout
logoutBtn.addEventListener("click", () => {
  result.innerHTML = "";
  //Elimamos el usuario de localStorage
  localStorage.removeItem("user");
  alert("Usuario desconectado");
  checkUser(false)
});

//Comprobar el usuario
const checkUser = (user) => {
  if (user) {
    //Hacemos que desaparezcan los formularios
    loginForm.style.display = "none";
    registerForm.style.display = "none";
    //Hacemos que aparezca el botón de logout
    logoutBtn.style.display = "block";
  } else {
    //Hacemos que aparezcan los formularios
    loginForm.style.display = "block";
    registerForm.style.display = "block";
    //Hacemos que desaparezca el botón de logout
    logoutBtn.style.display = "none";
  }
};

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("user")) {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    result.innerHTML = `
        Welcome ${savedUser.username}
        `;
    checkUser(savedUser);
  } else {
    checkUser(false);
  }
});
