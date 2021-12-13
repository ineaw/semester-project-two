import getExistingFavs from "./components/favFunctions.js";
import clearFavButton from "./components/articles/clearFavButton.js";
import createMenu from "./components/createMenu.js";

createMenu();

const favourites = getExistingFavs();
clearFavButton();

const favContainer = document.querySelector(".fav-container");
const clearFavBtn = document.querySelector("#clear-favs--btn");

favContainer.innerHTML = "";

if (favourites.length === 0) {
  favContainer.innerHTML = "Your wishlist is empty😔";
  clearFavBtn.style.display = "none";
}

favourites.forEach((favourite) => {
  let favIcon = "fa";

  const doesFavExist = favourites.find(function (fav) {
    return parseInt(fav.id) === favourite.id;
  });

  if (doesFavExist) {
    favIcon = "far";
  }

  favContainer.innerHTML += `
  <div class="favourite flex-card">
  <figure class="favourite__figure">
  <i class="${favIcon} fa-heart" data-id="${favourite.id}" data-title="${favourite.title}" data-price="${favourite.price}" data-description="${favourite.description}" data-image="${favourite.image}"></i>
  <a href="product.html?id=${favourite.id}">
  <img class="favourite__image" src="${favourite.image}" alt="${favourite.title}">
  </a>
  </figure>
  <div class="favourite__info">
  <h4 class="favourite__title">${favourite.title}</h4>
  <h4 class="favourite__price">kr <span class="price-value">${favourite.price}</span></h6>
  </div>
  </div>`;
});

const favButtons = document.querySelectorAll(".favourite i");

favButtons.forEach((iconButton) => {
  iconButton.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("far");
  this.classList.toggle("fa");

  const id = this.dataset.id;
  const title = this.dataset.title;
  const description = this.dataset.description;
  const price = this.dataset.price;
  const image = this.dataset.image;

  const currentFavs = getExistingFavs();

  const itemExists = currentFavs.find(function (fav) {
    return fav.id === id;
  });

  if (itemExists === undefined) {
    const product = { id: id, title: title, description: description, price: price, image: image };

    currentFavs.push(product);

    saveFavs(currentFavs);
  } else {
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFavs(newFavs);
  }
}
function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
