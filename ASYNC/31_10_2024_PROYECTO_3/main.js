const searchPhotos = (keyword, color) => {
  document.querySelector("#container").innerHTML = "";
  fetch(
    `https://api.unsplash.com/search/photos?client_id=Aa-cYDiqXwfDrvieBQ4Pj9J8yHZ1LB8g3cg6hnUo52k&page=2&query=${keyword}`
  )
    .then((res) => res.json())
    .then((res) => {
      printPhotos(res.results);
    });
};

const printPhotos = (photos) => {
  const container = document.querySelector("#container");

  for (const photo of photos) {
    container.innerHTML += `
    <img src="${photo.urls.regular}" alt="${photo.alt_description}" loading="lazy" />
    `;
  }
};

document.querySelector("#searchBtn").addEventListener("click", () => {
  searchPhotos(document.querySelector("#searchInput").value);
});
