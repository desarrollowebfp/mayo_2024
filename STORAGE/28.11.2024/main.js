let recordatorios = [];

const pintarRecordatorios = (recordatorios) => {
  const container = document.querySelector("#recordatorios");
  //Vaciamos el container para no repetir entre renderizados
  container.innerHTML = "";
  for (const recordatorio of recordatorios) {
    const li = document.createElement("li");
    // li.draggable = true;
    li.innerHTML = `
    <p>${recordatorio.text}</p>
    <date>${recordatorio.date}</date>
    <button onclick="borrarRecordatorio('${recordatorio.date}')">Eliminar</button>
    `;
    container.appendChild(li);
  }
};

const anadirRecordatorio = (textoRecordatorio) => {
  const nuevoRecordatorio = {
    text: textoRecordatorio,
    date: new Date(document.querySelector("#dateInput").value).toLocaleString(
      "es-ES",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
    ),
  };

  recordatorios.push(nuevoRecordatorio);
  //Repintamos los recordatorios con el nuevo incluido
  pintarRecordatorios(recordatorios);
  //Guardamos en memoria
  guardarEnMemoria(recordatorios);
};

const borrarRecordatorio = (fecha) => {
  //Sustituimos el array original por uno filtrado que no incluya el recordatorio cuya fecha le estamos pasando, es una manera más rapida de eliminar
  recordatorios = recordatorios.filter((r) => r.date !== fecha);
  pintarRecordatorios(recordatorios);
  //Guardamos en memoria
  guardarEnMemoria(recordatorios);
};

const guardarEnMemoria = (listadoRecordatorios) => {
  localStorage.setItem("recordatorios", JSON.stringify(listadoRecordatorios));
};

//Añadimos la funcionalidad al botón de añadir recordatorio
document.querySelector("#addBtn").addEventListener("click", () => {
  //Rescatamos el valor de input
  const value = document.querySelector("#textInput").value;
  //Lo añadimos
  anadirRecordatorio(value);
  //Vaciamos el input para un siguiente recordatorio nuevo
  document.querySelector("#textInput").value = "";
});

//Al arrancar la aplicación
window.addEventListener("DOMContentLoaded", () => {
  //Comprobamos si hay algo en el localStorage, si es asi lo recuperamos y lo pintamos y si no pintamos una lista por defecto.
  if (localStorage.getItem("recordatorios")) {
    const recordatoriosRescatados = localStorage.getItem("recordatorios");
    recordatorios = JSON.parse(recordatoriosRescatados);
    pintarRecordatorios(recordatorios);
  } else {
    recordatorios = [
      {
        text: "Añade tu propio recordatorio y se guardará con su fecha",
        date: "28/11/2024 18:13:00",
      },
    ];
    pintarRecordatorios(recordatorios);
  }
});
