import { getExistingFavs } from "./components/favFunctions.js";
import clearFavButton from "./components/articles/clearFavButton.js";
import createMenu from "./components/createMenu.js";
import { toggleOut } from "./components/articles/toggleOut.js";
import { toggleOutFavs } from "./components/toggleFavourites.js";

createMenu();
export const favourites = getExistingFavs();

const favContainer = document.querySelector(".fav-container");
const clearFavBtn = document.querySelector("#clear-favs--btn");
clearFavButton();

favContainer.innerHTML = "";

if (favourites.length === 0) {
  favContainer.innerHTML = `<h3 class="fav-empty">Your wishlist is empty😔</h2>`;
  clearFavBtn.style.display = "none";
}

favourites.forEach((favourite) => {
  let favIcon = "fa";

  favIcon = toggleOut(favourite, favIcon);

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
  iconButton.addEventListener("click", toggleOutFavs);
});
