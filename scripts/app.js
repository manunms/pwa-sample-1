const container = document.querySelector(".container");
const states = [
  {
    name: "Andhra Pradesh",
    image: "images/ap.jpg",
    link: "https://en.wikipedia.org/wiki/Andhra_Pradesh",
  },
  {
    name: "Gujarat",
    image: "images/guj.jpg",
    link: "https://en.wikipedia.org/wiki/Gujarat",
  },
  {
    name: "Karnataka",
    image: "images/kar.jpg",
    link: "https://en.wikipedia.org/wiki/Karnataka",
  },
  {
    name: "Kerala",
    image: "images/ke.jpg",
    link: "https://en.wikipedia.org/wiki/Kerala",
  },
  {
    name: "Maharashtra",
    image: "images/mah.jpg",
    link: "https://en.wikipedia.org/wiki/Maharashtra",
  },
  {
    name: "Madhya Pradesh",
    image: "images/mp.jpg",
    link: "https://en.wikipedia.org/wiki/Madhya_Pradesh",
  },
  {
    name: "Rajasthan",
    image: "images/raj.jpg",
    link: "https://en.wikipedia.org/wiki/Rajasthan",
  },
  {
    name: "Telangana",
    image: "images/tl.jpg",
    link: "https://en.wikipedia.org/wiki/Telangana",
  },
  {
    name: "Tamil Nadu",
    image: "images/tn.jpg",
    link: "https://en.wikipedia.org/wiki/Tamil_Nadu",
  },
  {
    name: "Uttar Pradesh",
    image: "images/up.jpg",
    link: "https://en.wikipedia.org/wiki/Uttar_Pradesh",
  },
];
const loadStates = () => {
  let output = "";
  states.forEach(
    ({ name, image, link }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="${link}">Get more info!!</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", loadStates);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
