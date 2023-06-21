let barNavigation = document.querySelector(".liste-du-patrimoine");
let geoButton = document.querySelector("#geo-btn");
let garesButton = document.querySelector("#gares-btn");
let ouvrageButton = document.querySelector("#ouvrage-btn");

geoButton.addEventListener("click", () => {
  barNavigation.classList.toggle("geo-class-active");
  barNavigation.classList.remove("gares-class-active");
  barNavigation.classList.remove("ouvrage-class-active");
});

garesButton.addEventListener("click", () => {
  barNavigation.classList.toggle("gares-class-active");
  barNavigation.classList.remove("geo-class-active");
  barNavigation.classList.remove("ouvrage-class-active");


});

ouvrageButton.addEventListener("click", () => {
  barNavigation.classList.toggle("ouvrage-class-active");
  barNavigation.classList.remove("geo-class-active");
  barNavigation.classList.remove("gares-class-active");


});
