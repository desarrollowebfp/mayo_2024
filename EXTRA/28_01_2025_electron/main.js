import { app, BrowserWindow } from "electron";
import * as path from 'path';

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 380,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile("./dist/index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/* //Importar los métodos y librerias necesarios
const { app, BrowserWindow } = require("electron");
const path = require("path");

//Creamos una variable para almacenar la referencia de la ventana principal
let mainWindow;

//Vamos a definir el evento que se dispara cuando la app está lista para su ejecución
app.on("ready", () => {
  //Creamos una nueva ventana
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
  });

  //Tenemos que cargar el fichero index.html del dist que ha generado Vite y que dispara nuestra aplicación
  mainWindow.loadFile("dist/index.html");
});

//Definimos el evento que se dispara cuando cerramos la ventana
app.on("window-all-closed", () => {
  //Siempre que la plataforma (OS) no sea MACOS cerramos la ventana por completo
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//Definimos el evento al reactivar la app en MacOS
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    //Si no hay ninguna ventana abierta, creamos una nueva con nuestra aplicación otra vez
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        contextIsolation: true,
      },
    });

    //Tenemos que cargar el fichero index.html del dist que ha generado Vite y que dispara nuestra aplicación
    mainWindow.loadFile("dist/index.html");
  }
});
 */
//
