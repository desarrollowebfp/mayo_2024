//Importar tanto la libreria como los idiomas
import i18next from "i18next";

//Función que inicializa i18n;
const initI18n = async () => {
  //Recuperar la informacion de los JSON
  const responseES = await fetch("src/locales/es.json");
  const esTranslations = await responseES.json();
  const responseEN = await fetch("src/locales/en.json");
  const enTranslations = await responseEN.json();
  const responseFR = await fetch("src/locales/fr.json");
  const frTranslations = await responseFR.json();

  //Vamos a autodetectar el idioma del navegador para que sea el idioma inicial

  i18next.init({
    lng: navigator.languages[1], //Idioma inicial
    fallbackLng: "en", //Idioma de respuesto o en caso de error
    resources: {
      es: { translation: esTranslations },
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
    },
  });
};

//Funcion para cambiar el idioma segun el argumento (es, en, fr)
const changeLanguage = (lang) => i18next.changeLanguage(lang);

//Funcion que traduce en base al contenido mediante el valor de atributo de i18n y la funcion t de i18next
const translatePage = () => {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = i18next.t(key);
  });
};

export {initI18n, changeLanguage, translatePage};