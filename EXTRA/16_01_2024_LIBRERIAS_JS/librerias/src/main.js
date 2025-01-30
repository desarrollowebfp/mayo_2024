import "./style.css";
import ScrollReveal from "scrollreveal";

import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

tippy("#myButton", {
  content: "My tooltip!",
  duration: 0,
  arrow: false,
  hideOnClick: true,
});

ScrollReveal().reveal(".title");
