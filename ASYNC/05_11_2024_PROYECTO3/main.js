import "./style.css";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "Aa-cYDiqXwfDrvieBQ4Pj9J8yHZ1LB8g3cg6hnUo52k",
});

unsplash.search
  .getPhotos({
    query: "cat",
    perPage: 20,
    orientation: "landscape",
  })
  .then((res) => {
    if (res.response.results.length) {
      printPhotos(res.response.results);
    } else {
      console.log("Busca otra cosa por favor");
    }
  })
  .catch((error) => {
    console.log(error);
  });
