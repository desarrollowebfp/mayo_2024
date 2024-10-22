fetch("https://ghibliapi.vercel.app/films")
  .then((data) => data.json())
  .then((data) => {
    for (const item of data) {
      document.body.innerHTML += `<h2>${item.title}</h2>`;
    }
  });
