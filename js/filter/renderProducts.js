import { getExistingFavs } from "../components/favFunctions.js";
import sortProducts from "../components/sortProducts.js";
import { toggleFavs } from "../components/toggleFavourites.js";
import { favExist } from "./doesFavExist.js";

export function renderProducts(products) {
  const productContainer = document.querySelector(".all-products");
  productContainer.innerHTML = "";
  console.log(products);

  let getFavs = getExistingFavs();
  const favourites = getFavs;

  sortProducts(products, productContainer);

  products.forEach((product) => {
    let favIcon = toggle(product);

    productContainer.innerHTML += `<div class="product flex-card">
                                    <figure class="product__figure">
                                    <i class="${favIcon} fa-heart" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}" data-image="${product.image_url}"></i>
                                    <a href="product.html?id=${product.id}">
                                    <img class="product__image" src="${product.image_url}" alt="${product.title}">
                                    </a>
                                    </figure>
                                    <div class="product__info">
                                    <h3 class="product__title">${product.title}</h3>
                                    <h4 class="product__price">kr <span class="price-value">${product.price}</span></h6>
                                    </div>
                                  </div>`;
  });
  toggleFavs();

  function toggle(product) {
    return favExist(favourites, product);
  }
}
