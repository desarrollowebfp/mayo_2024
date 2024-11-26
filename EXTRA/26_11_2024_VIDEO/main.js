const video = document.querySelector("#scroll-video");
const loader = document.querySelector("#loader");

const enableScroll = () => {
  document.body.style.overflow = "auto";
};

const disableScroll = () => {
  document.body.style.overflow = "hidden";
};

disableScroll();

video.addEventListener("canplaythrough", () => {
  enableScroll();
  loader.style.display = "none";
});

window.addEventListener("scroll", () => {
  // Altura total desplazable del documento
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Posición actual del scroll
  const scrollPosition = window.scrollY;

  // Calcular el progreso del scroll (0 a 1)
  const progress = scrollPosition / scrollableHeight;

  // Actualizar el tiempo del video según el progreso
  video.currentTime = progress * video.duration;
});
