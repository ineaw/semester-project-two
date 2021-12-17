// import createMenu from "./components/createMenu.js";
// import { toggleOut } from "./components/articles/toggleOut.js";
// import { toggleOutFavs } from "./components/toggleFavourites.js";
// import getExistingItems from "./components/cartFunctions.js";

// createMenu();
// const shopping = getExistingItems();

// const favContainer = document.querySelector(".fav-container");

// favContainer.innerHTML = "";

// if (shopping.length === 0) {
//   favContainer.innerHTML = "Your cart is empty😔";
// }

// shopping.forEach((favourite) => {
//   favContainer.innerHTML += `
//   <div class="favourite flex-card">
//   <figure class="favourite__figure">
//   <a href="product.html?id=${favourite.id}">
//   <img class="favourite__image" src="${favourite.image}" alt="${favourite.title}">
//   </a>
//   </figure>
//   <div class="favourite__info">
//   <h4 class="favourite__title">${favourite.title}</h4>
//   <h4 class="favourite__price">kr <span class="price-value">${favourite.price}</span></h6>
//   </div>
//   </div>`;
// });
