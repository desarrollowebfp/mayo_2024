import "./style.css";
import { supabase } from "./supabase";

const loginForm = document.querySelector("#login_form");
const emailInput = document.querySelector("#email");
const main = document.querySelector("main");
const logoutBtn = document.querySelector("#logoutBtn");
const uploadForm = document.querySelector("#upload-form");
const fileInput = document.querySelector("#file-input");
const galleryDiv = document.querySelector("#gallery");

//Declaramos una variable donde almacenar durante la ejecución al usuario actual
let currentUser = null;

//Añadimos el evento al formulario para que supabase mande al correo un magicLink
loginForm.addEventListener("submit", async (ev) => {
  //Con esta linea evitamos que el submit recargue la web
  ev.preventDefault();
  //Almacenamos el email
  const email = emailInput.value;
  //Mediante la funcion signInWithOTP loguearemos al usuario a través de un correo electronico
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: true, // Permite que se registre el usuario si no existe
      emailRedirectTo: window.location.origin, // Redirige al mismo sitio tras el login
    },
  });
  if (error) {
    alert("Error al enviar Magic Link: " + error.message);
  } else {
    alert("Revisa tu correo para completar el login.");
  }
});

//Añadimos un escuchador de cambios de autenticación de Supabase
supabase.auth.onAuthStateChange((ev, session) => {
  if (session?.user) {
    currentUser = session.user;
    //Ocultamos el formulario y mostramos el login
    loginForm.style.display = "none";
    main.style.display = "block";

    loadGallery();
  }
});

//Añadimos la funcionalidad de Logout para cerrar la sesión en supabase
logoutBtn.addEventListener("click", async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    alert("Error al cerrar sesión");
  } else {
    currentUser = null;
    loginForm.style.display = "flex";
    main.style.display = "none";
  }
});

//Funcionalidad del uploadForm
uploadForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const file = fileInput.files[0];
  if (!file) {
    alert("No hay ningún fichero seleccionado para subir");
    return;
  }
  // Genera una ruta única: carpeta del usuario + timestamp + nombre original
  const filePath = `${currentUser.id}/${file.name}`;
  //https://kacyjsnjnazjkzhntqeq.supabase.co/storage/v1/object/sign/uploads/e83d4490-d3b6-4639-8c82-4ff051c982a4/1739986384624-my-notion-face-transparent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1cGxvYWRzL2U4M2Q0NDkwLWQzYjYtNDYzOS04YzgyLTRmZjA1MWM5ODJhNC8xNzM5OTg2Mzg0NjI0LW15LW5vdGlvbi1mYWNlLXRyYW5zcGFyZW50LnBuZyIsImlhdCI6MTczOTk4NjQzMiwiZXhwIjoxNzcxNTIyNDMyfQ.YgvkyPBdG1EVbqVIezISmt9FksmjHJFzEPjc8WjwvjE
  const { data, error } = await supabase.storage
    .from("uploads")
    .upload(filePath, file);

  if (error) {
    alert("No se ha podido subir la imagen");
  } else {
    fileInput.value = "";
    //Pintamos la galeria de nuevo
    loadGallery();
  }
});

//Configuramos la funcion loadGallery para cargar la galeria de cada uno de los usuarios
const loadGallery = async () => {
  if (!currentUser) {
    return;
  }
  const { data, error } = await supabase.storage
    .from("uploads")
    .list(currentUser.id, {
      limit: 100,
      offset: 0,
      sortBy: {
        column: "name",
        order: "asc",
      },
    });

  if (error) {
    galleryDiv.innerHTML = "<h2>No se puede cargar la galeria</h2>";
  } else {
    if (data.length === 0) {
      galleryDiv.innerHTML = "<h2>Todavía no has subido ninguna imagen</h2>";
      return;
    }

    galleryDiv.innerHTML = "";

    data.forEach((file) => {
      const filePath = `${currentUser.id}/${file.name}`;
     
      const { data: { publicUrl } } = supabase
      .storage
      .from('uploads')
      .getPublicUrl(filePath);
      const img = document.createElement("img");
      img.src = publicUrl;
      img.alt = file.name;
      galleryDiv.appendChild(img);
    });
  }
};
