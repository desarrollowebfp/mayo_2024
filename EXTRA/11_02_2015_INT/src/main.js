import './style.css'

import { initI18n, changeLanguage, translatePage } from './i18n';

//Arrancamos la libreria de i18n y, una vez terminada de arranca (tiene que leer y parsear todos los JSON de los idiomas), entonces traduce la pagina
initI18n().then(() => {
  translatePage()
})

//Le damos la funcion de cambiar los idiomas al select de html
document.querySelector("#languageSwitcher").addEventListener("change", (ev) => {
  changeLanguage(ev.target.value).then(() => translatePage());
})