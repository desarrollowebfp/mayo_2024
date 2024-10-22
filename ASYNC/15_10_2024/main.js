const base_url = "https://ghibliapi.vercel.app";

fetch(base_url + "/films")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  }).catch((error) => {
    console.log(error.message)
  })
