// 1️⃣ Importamos los módulos necesarios de Electron y Node.js
const { app, BrowserWindow, Menu, dialog, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

// 2️⃣ Definimos la ruta del archivo donde se almacenarán los snippets
const snippetsFile = path.join(__dirname, "snippets.json");

// 3️⃣ Función para leer los snippets desde el archivo JSON
const readSnippets = () => {
  try {
    if (!fs.existsSync(snippetsFile)) {
      // Si el archivo no existe, lo creamos con un array vacío
      fs.writeFileSync(snippetsFile, JSON.stringify([]));
      return [];
    }
    // Leemos el contenido del archivo y lo parseamos como JSON
    const data = fs.readFileSync(snippetsFile, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error leyendo snippets:", error);
    return [];
  }
};

// 4️⃣ Función para escribir los snippets en el archivo JSON
const writeSnippets = (snippets) => {
  try {
    // Guardamos los snippets en formato JSON con una identación de 2 espacios para mayor legibilidad
    fs.writeFileSync(snippetsFile, JSON.stringify(snippets, null, 2));
  } catch (error) {
    console.error("Error escribiendo snippets:", error);
  }
};

// 5️⃣ Función para exportar snippets a una carpeta elegida por el usuario
const exportSnippets = () => {
  const exportPath = dialog.showSaveDialogSync({
    title: "Exportar snippets",
    defaultPath: path.join(app.getPath("documents"), "snippets_export.json"),
    filters: [{ name: "JSON", extensions: ["json"] }],
  });

  if (exportPath) {
    try {
      fs.copyFileSync(snippetsFile, exportPath);
      dialog.showMessageBoxSync({
        type: "info",
        title: "Exportación exitosa",
        message: "Los snippets han sido exportados correctamente.",
      });
    } catch (error) {
      console.error("Error exportando snippets:", error);
      dialog.showMessageBoxSync({
        type: "error",
        title: "Error de exportación",
        message: "Hubo un problema al exportar los snippets.",
      });
    }
  }
};

// 6️⃣ Definimos la plantilla del menú de la aplicación
const menuTemplate = [
  {
    label: "File",
    submenu: [
      { label: "Export Snippets", click: exportSnippets },
      { label: "Quit", click: () => app.quit() },
    ],
  },
  {
    label: "Edit",
    submenu: [
      { label: "Cut", role: "cut" },
      { label: "Copy", role: "copy" },
      { label: "Paste", role: "paste" },
    ],
  },
];

// 7️⃣ Función para crear la ventana principal de la aplicación
const createMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: { nodeIntegration: true, contextIsolation: false },
  });

  mainWindow.loadFile("index.html");

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
};

// 8️⃣ Función para asignar emojis a los snippets según el lenguaje
const getLanguageEmoji = (language) => {
  const emojis = { javascript: "🟨", python: "🟩", html: "🟧", css: "🟦" };
  return emojis[language] || "🔹"; // Si no se encuentra, se usa un icono genérico
};

// 9️⃣ Manejador para obtener los snippets y agregarles su emoji
ipcMain.handle("get-snippets", () => readSnippets().map(snippet => ({
  ...snippet,
  title: `${getLanguageEmoji(snippet.language)} ${snippet.title}`
})));

// 🔟 Manejador para guardar un nuevo snippet en el archivo JSON
ipcMain.on("save-snippet", (event, snippet) => {
  const snippets = readSnippets();
  snippets.push(snippet);
  writeSnippets(snippets);
});

// 1️⃣1️⃣ Evento que se ejecuta cuando Electron ha terminado de inicializarse
app.whenReady().then(createMainWindow);
